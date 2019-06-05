# *Oui!*
![package version](https://img.shields.io/badge/oui-v0.2.0-fb976c.svg)
![stability](https://img.shields.io/badge/stability-beta-6680f2.svg)

Oui is a starting-place stylesheet that applies sensable defaults so that
you can focus on functionality instead of aesthetics. It makes a few assumptions
about the structure of your document, but nothing drastic.

- `<body>` does not have any margin or padding, so that content can go edge to
edge by default.
- If you want a container element *with* padding, use `<section>`
- If you want a container element *without* padding, use `<div>`
- Oui frequently tries to use tasteful transparency so that things such as buttons
and text input always match the context they're in. If I have failed and it
looks utterly terrible under reasonable circumstances, please tell me!
- I have tried to make customization easy by naming the variables verbosely and
grouping them together at the top.

## Build
```shell
sass style/oui.sass:dist/oui.css
sass style/oui.sass:dist/oui.min.css --style compressed --no-source-map
```

### Usage
```html
<!--
  Just include it in your page. No fancy classes to memorize and apply.
-->
<link rel="stylesheet" type="text/css" href="oui.min.css" />
```
