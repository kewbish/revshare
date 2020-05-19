# Revshare.js
A JS library for revenue sharing, made for the #gftwhackathon.  
Available on [NPM at @kewbish/revshare](https://www.npmjs.com/package/@kewbish/revshare)  
Made in JS, May 2020.  
Created by [Kewbish](https://kewbish.github.io).  
Released under the MIT License.  

This project is based on the [proposed Web Monetization interface](https://webmonetization.org/). It's a 'browser API which allows the creation of a payment stream from the user agent to the website'. Currently, this isn't implemented in any major browsers, but is available through an extension or a custom browser. [Check out Coil.com for more.](https://coil.com).  
This project was created for the [#gftwhackathon](https://dev.to/t/gftwhackathon).

## Installation Usage
This package is available on NPM at [@kewbish/revshare](https://www.npmjs.com/package/@kewbish/revshare).  
- Run `npm i @kewbish/revshare` to install it in your project.  
- It can then be referenced as below:
```
<script src="./node_modules/@kewbish/revshare/dist/index.js"></script>
```

Alternatively, add a `<script>` tag in your `<head>`:  
```
<script src="https://unpkg.com/@kewbish/revshare"></script>
```

## Basic Usage
Add a `<rev-share>` tag anywhere in your body.  
This tag requires a `pointers` attribute, formatted in JSON.  
```
...
<rev-share pointers="{"$john.wallet": 50, "$alicia.wallet": 50}">
    <p>This is your revenue-shared content!</p>
</rev-share>
...
```

> :warning: This rev-share specification is not 100% accurate, due to the probablistic nature and the limitations of the Web Monetization format.  

> :warning: Nesting `<rev-share>` elements will not 'nest' the revenue sharing pointers (revshare.js does not take nesting levels into account). Using `<rev-share>` tags on one nesting level is recommended.

Additional documentation can be found [in the docs folder](./docs/README.md).

## Contributions
Issues and feature requests are welcome - but be gentle, I'm new to JS.  