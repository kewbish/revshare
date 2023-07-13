# Revshare.js 💸

A JS library for revenue sharing. Made for the [#gftwhackathon](https://dev.to/devteam/announcing-the-grant-for-the-web-hackathon-on-dev-3kd1), won the [Grand Prize](https://dev.to/devteam/announcing-the-grant-for-the-web-x-dev-hackathon-winners-1nl4) as a Creative Catalyst.  
Available on [NPM at @kewbish/revshare](https://www.npmjs.com/package/@kewbish/revshare).  
Made in vanilla JS, May 2020.  
Created by [Kewbish](https://kewbi.sh).  
Released under the [MIT License](./LICENSE).

See the project [landing page](https://kewbi.sh/revshare). Issues and feature requests are welcome!

## Installation Usage

This package is available on NPM at [@kewbish/revshare](https://www.npmjs.com/package/@kewbish/revshare).

- Run `npm i @kewbish/revshare` to install it in your project.
- It can then be referenced as below:

```
<script src="./node_modules/@kewbish/revshare/dist/index.min.js"></script>
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
<rev-share pointers='{"$john.wallet": 50, "$alicia.wallet": 50}'>
    <p>This is your revenue-shared content!</p>
</rev-share>
...
```

Additional documentation can be found [in the `docs` folder](./docs/README.md).

> :warning: This rev-share specification is done probablistically nature due to limitations of the Web Monetization protocol.

## About

This project is based on the [proposed Web Monetization protocol](https://webmonetization.org/). It's a browser API which allows the creation of a payment stream from the user agent to the website. Currently, this isn't implemented in any major browsers, but is available through an extension or a custom browser. [Check out Coil.com for more.](https://coil.com).

This project was created for, and won, the [#gftwhackathon](https://dev.to/t/gftwhackathon).

