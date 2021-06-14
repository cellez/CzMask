# CzMask

Simple mask for inputs, JavaScript Vanilla

[![version](https://img.shields.io/github/v/tag/cellez/czmask?include_prereleases&style=flat-square)](https://raw.githubusercontent.com/cellez/CzMask/master/dist/CzMask.js) [![npm version](https://img.shields.io/npm/v/czmask?style=flat-square)](https://www.npmjs.com/package/czmask) [![License: MIT](https://img.shields.io/badge/License-MIT-red.svg?style=flat-square)](https://opensource.org/licenses/MIT)

## Install

- NPM install `npm install czmask`
- NPM use: `import CzMask from 'czmask'`

## Usage

The inputs must have the attribute `data-mask`, and in this one having the mask, the variable value is represented by `_` _(**underscore**)_ optionally in the capture you can use the parameter `mask`

```html
<input
  id="myId"
  type="text"
  data-mask="(+__) ___ ___ ___"
  placeholder="(+__) ___ ___ ___"
/>
```

Capturing a tag

```javascript
CzMask({
  el: document.getElementById('myId') // selector
  mask: '__/__/____' // optional
})
```

Capturing all inputs, which have data-mask

```javascript
document.querySelectorAll('input[data-mask]').forEach(tag => {
  CzMask({ el: tag })
})
```

## Up a repo

- Install dependencies `npm install`
- Run dev server `npm run serve`

> http://localhost:1234/
