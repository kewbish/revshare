document.allPointers = []

class RevShare extends HTMLElement{

    connectedCallback(){
        this.style.margin = "0";
        this.style.padding = "0";
        console.log('New Revshare element created.');
        var parsedPointers = this.getAttribute('pointers');
        parsedPointers = JSON.parse(parsedPointers);
        document.allPointers.push(parsedPointers);
    }
}

window.customElements.define('rev-share', RevShare);