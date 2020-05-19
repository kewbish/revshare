# Revshare.js Documentation

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

## <meta> Generation
As page-views go up, the percentage probability of getting a correct pointer rev-share distribution rises.  
Revshare.js chooses a random `<rev-share>` element on the page, regardless of nesting level, and parses its pointers. It then parses the probability amount associated with a particular pointer and randomly chooses a payment pointer.  
Then, any existing monetization meta tag is overwritten with the chosen payment pointer.  

## Warnings
> :warning: This rev-share specification is not 100% accurate, due to the probablistic nature and the limitations of the Web Monetization format.  

> :warning: Nesting `<rev-share>` elements will not 'nest' the revenue sharing pointers (revshare.js does not take nesting levels into account). Using `<rev-share>` tags on one nesting level is recommended.   

> :warning: If no `<rev-share>` elements are found, the monetization `<meta>`'s content will be set to `undefined`. This should be handled in your application, and the payment pointer set to a fallback value.  