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
* You can also look into the test folder in this project.
* Get a DOM element, read it's innerHTML, make it uppercase, and log that. (Read it from bottom to top.)
```javascript
var app = l.compose(
  l.log.value,
  l.string.upper,
  l.object.getValue('innerHTML'),
  l.dom.getDomElement
);

app('#mydiv');
```
* Request JSON data and inject it into a template. (Read the compose from right to left.)
```javascript
var userTemplate = l.template.set('<div class="avatar">{{login}}<img src="{{avatar_url}}"/></div>');
var url = "https://api.github.com/repos/mozilla/kuma/contributors";
var userTemplates = l.compose(l.map(userTemplate), l.http.getResponseJSON);
var usersTemplate = l.compose(l.array.toString, userTemplates);
var eitherUsersTemplate = l.compose(l.Either('could not generate the template'), l.array.toString, userTemplates);
function app(){
  var setMydiv = getElSetHtml('#mydiv');
  var showUsers = l.compose(l.map(setMydiv), eitherUsersTemplate);
  l.http.get(showUsers)(url)();
}

app();
```


NPM
===
https://www.npmjs.com/package/smallfoot

Installation
============
```shell
npm install smallfoot
```

Build distribution
==================
```shell
npm run dist
```

Contribution
============
Bug fixes, docs and examples are welcomed.

You can start with smallfoot-sandbox, see https://github.com/szilveszter9/smallfoot-sandbox
```shell
git clone https://github.com/szilveszter9/smallfoot.js
git clone https://github.com/szilveszter9/smallfoot-sandbox
cd smallfoot-sandbox
npm install
npm link ../smallfoot.js
npm run dev
npm start
```
