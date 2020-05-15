document.allPointers = {}

class RevShare extends HTMLElement {

    connectedCallback() {
        this.style.margin = "0";
        this.style.padding = "0";
        console.log('New Revshare element created.');
    }
    attributeChangedCallback() {
        this.checkParsedPointers();
        genMeta();
    }
    static get observedAttributes() {
        return ['pointers'];
    }
    checkParsedPointers() {
        var parsedPointers = JSON.parse(this.getAttribute('pointers'));
        if (Object.values(parsedPointers).reduce((a, b) => a + b) != 100) {
            console.warn('RevShareProportionWarning: revshare proportions do not sum to 100. Check that these proportions are correct');
        }
    }
}

window.customElements.define('rev-share', RevShare);

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