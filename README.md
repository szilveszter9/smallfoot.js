# Smallfoot.js #

Description
===========
Smallfoot.js is a minimalist library for functional programming, with small footprint.

Github
======
https://github.com/szilveszter9/smallfoot.js

Examples
========
* For more examples see: play.js at https://github.com/szilveszter9/smallfoot-sandbox
* Read it from bottom to top: get a DOM element, read it's innerHTML, make it uppercase, and log that.
```javascript
var app = l.compose(
  l.log.value,
  l.string.upper,
  l.object.getValue('innerHTML'),
  l.dom.getDomElement
);

app('#mydiv');
```

NPM
===
npmjs.com/package/smallfoot

Installation
============
npm install smallfoot

Contribution
============
Bug fixes, docs and examples are welcomed.
