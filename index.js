document.allPointers = []

class RevShare extends HTMLElement {

    connectedCallback() {
        this.style.margin = "0";
        this.style.padding = "0";
        console.log('New Revshare element created.');
        var parsedPointers = this.getAttribute('pointers');
        parsedPointers = JSON.parse(parsedPointers);
        document.allPointers.push(parsedPointers);
    }
    attributeChangedCallback() {
        genMeta();
    }
    static get observedAttributes() {
        return ['pointers'];
    }
}

window.customElements.define('rev-share', RevShare);

function pickPointer() {
    var p = Math.floor(Math.random() * document.allPointers.length);
    const sum = document.allPointers[p] && Object.values(document.allPointers[p]).reduce((sum, weight) => sum + weight, 0);
    let choice = Math.random() * sum;
    for (const pointer in document.allPointers[p]) {
        const weight = document.allPointers[p][pointer];
        if ((choice -= weight) <= 0) {
            return pointer;
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