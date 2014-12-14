toggleprint
===========

[![npm version](https://badge.fury.io/js/toggleprint.svg)](http://badge.fury.io/js/toggleprint)
[![Build Status](https://travis-ci.org/Munter/toggleprint.svg?branch=master)](https://travis-ci.org/Munter/toggleprint)
[![Coverage Status](https://img.shields.io/coveralls/Munter/toggleprint.svg)](https://coveralls.io/r/Munter/toggleprint)
[![Dependency Status](https://david-dm.org/Munter/toggleprint.svg)](https://david-dm.org/Munter/toggleprint)

Toggleprint lets you toggle the media attributes of your document stylesheets to visualize what the print preview would show, but in your browser window instead.
This gives you a very quick way to work with your print styles.

It is recommended that you combine this with some sort of live CSS reloading for a very quick development roundtrip.


Usage
-----

Toggleprint can be included via CommonJS, AMD or directly as a script tag.


``` javascript
// Toggle print mode on/off
togglePrint.toggle();

// Set up a hotkey that will toggle print mode on/off
// 'p' is the default hotkey
togglePrint();

// Set up a custom hotkey 'z' to toggle print mode
togglePrint({
  key: 'z'
})
```


License
-------
(The MIT License)

Copyright (c) 2014 Peter Müller <munter@fumle.dk>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
