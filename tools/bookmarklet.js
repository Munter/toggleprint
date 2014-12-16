var toggle = require('../toggleprint').toggle;
var uglify = require('uglify-js');
var fs = require('fs');

var result = uglify.minify(toggle.toString(), {
  fromString: true
});

// Seriously jshint?
var bookmarklet = 'javascript' + ':('.toLowerCase() + result.code + ')()';

process.stdout.write(bookmarklet);
