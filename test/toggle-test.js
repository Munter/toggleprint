var expect = require('unexpected')
    .clone()
    .installPlugin(require('unexpected-sinon'))
    .installPlugin(require('unexpected-jsdom'));

expect.output.installPlugin(require('magicpen-prism'));

// var sinon = require('sinon');
var togglePrint = require('../toggleprint');

describe('Function signature', function () {
  it('should be a function', function () {
    expect(togglePrint, 'to be a', Function);
  });

  it('should have a `toggle` method', function () {
    expect(togglePrint.toggle, 'to be a', Function);
  });
});

describe('Hotkey setup', function () {
  it('should not listen to any keys when not active', function () {

  });

  it('should listen to the `p` keypress by default', function () {

  });

  it('should listen to the `p` keypress by default', function () {

  });
});

describe('Stylesheet media query toggling', function () {
  it('should leave styleshets without media queries alone', function () {

  });

  it('should change media type `print` stylesheets to `all`', function () {

  });

  it('should change media type `screen` stylesheets to `none`', function () {

  });
});
