# Oui
![Oui v0.1.0](https://img.shields.io/badge/oui-v0.1.0-df4465.svg)

## Overview
Oui is a starting-place stylesheet for beginning a new project, whether it's the
humble beginnings of a large scale application or just a simple demo/proof-of-concept.

There are a couple important things to note:

- In `<form>`s your label should always come after the input
- `<body>` does not have any margin or padding, so that content can go edge to
edge by default.
- If you want a container element *with* padding, use `<section>`
- If you want a container element *without* padding, use `<div>`
- Oui frequently tries to use tasteful transparency so that things such as buttons
and text input always match the context they're in. If I have failed and it
looks utterly terrible under reasonable circumstances, please tell me!
- I have tried to make customization easy by naming the variables verbosely and
grouping them together at the top.

### Usage
```html
<link rel="stylesheet" type="text/css" href="oui.min.css" />
```

### Installation
Just download a compiled CSS file from the dist directory, or download the .sass
source, customize it, and build it yourself.
