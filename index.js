class RevShare extends HTMLElement {

    connectedCallback() {
        this.style.margin = "0";
        this.style.padding = "0";
    }
    attributeChangedCallback() {
        if (!this.hasAttribute('pointers')){
            throw "RevSharePointerError: revshare pointer list cannot be found. Check that it exists and is correctly formatted.";
        }
        else{
            this.checkParsedPointers();
            genMeta();
        }
    }
    disconnectedCallback() {
        if (document.getElementsByTagName('rev-share').length == 0){
            console.warn('RevShareNoElementsWarning: no revshare elements found. Check this is the intended behaviour, and reset the monetization pointer.');
        }
        else{
            genMeta();
        }
    }
    static get observedAttributes() {
        return ['pointers'];
    }
    checkParsedPointers() {
        var parsedPointers = JSON.parse(this.getAttribute('pointers'));
        Object.values(parsedPointers).forEach(function (item){
            if (typeof item !== 'number'){
                throw "RevShareProportionTypeError: revshare proportions are of incorrect type. Check that your pointers attribute is correctly formatted.";
            }
        });
        if (Object.values(parsedPointers).reduce((a, b) => a + b) != 100) {
            console.warn('RevShareProportionSumWarning: revshare proportions do not sum to 100. Check that these proportions are correct.');
        }
    }
}

if ('customElements' in window){
    customElements.define('rev-share', RevShare);
}

function pickPointer() {
    var revEls = document.getElementsByTagName('rev-share');
    var p = Math.floor(Math.random() * revEls.length);
    const sum = revEls[p] && Object.values(revEls[p]).reduce((sum, weight) => sum + weight, 0);
    let choice = Math.random() * sum;
    if (typeof revEls[p] !== "undefined") {
        var choices = JSON.parse(revEls[p].getAttribute('pointers'));
        for (const pointer in choices) {
            const weight = choices[pointer];
            if ((choice -= weight) <= 0) {
                return pointer;
            }
        }
    }
}

function genMeta() {
    var x = document.querySelector("[name='monetization']")
    if(x) {
        x.remove();
    }
    const monTag = document.createElement('meta');
    monTag.name = 'monetization';
    monTag.content = pickPointer();
    document.head.appendChild(monTag);
}

window.addEventListener('load', () => {
    genMeta();
});