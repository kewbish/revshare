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

## Pointers Attribute
The `pointers` attribute formatted as a `wallet: percentage` keypair. Currently, a wallet can only be set up on [Coil.com](http://coil.com).  
A `RevSharePointerError` will be thrown if a `pointers` attribute is not found.  
A `RevShareProportionSumWarning` will be thrown if the percentages do not sum to 100. This is due to the way the web monetization is set up.  
A `RevShareProportionTypeError` will be thrown if the percentage value is not of the number type.  

## Contributions
Issues and suggestions / requests are welcome - but be gentle, I'm new to JS.  