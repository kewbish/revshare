class RevShare extends HTMLElement{

    connectedCallback(){
        console.log('New Revshare element created.');
    }

}

window.customElements.define('rev-share', RevShare);