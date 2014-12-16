var toggle = require('../toggleprint').toggle;
var uglify = require('uglify-js');

var result = uglify.minify(toggle.toString(), {
  fromString: true
});

// Seriously jshint?
process.stdout.write('javascript' + ':('.toLowerCase() + result.code + ')()');
