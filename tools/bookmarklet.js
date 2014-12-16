var toggle = require('../toggleprint').toggle;
var uglify = require('uglify-js');

var result = uglify.minify(toggle.toString(), {
  fromString: true
});

process.stdout.write('javascript:(' + result.code + ')()');
