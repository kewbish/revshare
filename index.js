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
}

window.customElements.define('rev-share', RevShare);

function pickPointer() {
    var p = Math.floor(Math.random() * document.allPointers.length);
    const sum = Object.values(document.allPointers[p]).reduce((sum, weight) => sum + weight, 0)
    let choice = Math.random() * sum
    for (const pointer in document.allPointers[p]) {
        const weight = document.allPointers[p][pointer]
        if ((choice -= weight) <= 0) {
            console.log(pointer);
            return pointer
        }
    }
}