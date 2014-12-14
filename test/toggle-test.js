var expect = require('unexpected')
    .clone()
    .installPlugin(require('unexpected-sinon'))
    .installPlugin(require('unexpected-jsdom'));

expect.output.installPlugin(require('magicpen-prism'));

// var sinon = require('sinon');
var jsdom = require('jsdom');

var togglePrint = require('../toggleprint');

describe('Function signature', function () {
  it('should be a function', function () {
    expect(togglePrint, 'to be a', Function);
  });

  it('should have a `toggle` method', function () {
    expect(togglePrint.toggle, 'to be a', Function);
  });
});

describe.skip('Hotkey setup', function () {

  it('should not listen to any keys when not active', function () {
    expect(window.togglePrint, 'to be a', Function);
  });

  it('should listen to the `p` keypress by default', function () {
    expect(window.togglePrint, 'to be a', Function);
  });

  it('should listen to the `p` keypress by default', function () {
    expect(window.togglePrint, 'to be a', Function);
  });
});

describe('Stylesheet media query toggling', function () {

  beforeEach(function (next) {
    jsdom.env({
      html: 'Hello world',
      done: function (errors, window) {
        if (errors) {
          return next(errors);
        }

        global.window = window;
        global.document = window.document;
        window.console = global.console;

        window.togglePrint = require('../toggleprint');

        next();
      }
    });
  });

  it('should leave styleshets without media queries alone', function () {
    var outerHTML = '<link rel="stylesheet" href="default.css">';
    document.head.innerHTML += outerHTML;
    var node = document.head.lastChild;

    expect(node.getAttribute('media'), 'to be', null);

    window.togglePrint.toggle();

    expect(node.getAttribute('media'), 'to be', null);
  });

  it('should change media type `print` stylesheets to `all`', function () {
    var outerHTML = '<link rel="stylesheet" href="default.css" media="print">';
    document.head.innerHTML += outerHTML;
    var node = document.head.lastChild;

    expect(node.getAttribute('media'), 'to be', 'print');

    window.togglePrint.toggle();

    expect(node.getAttribute('media'), 'to be', 'all');

    window.togglePrint.toggle();

    expect(node.getAttribute('media'), 'to be', 'print');
  });

  it('should change media type `screen` stylesheets to `none` and back', function () {
    var outerHTML = '<link rel="stylesheet" href="default.css" media="screen">';
    document.head.innerHTML += outerHTML;
    var node = document.head.lastChild;

    expect(node.getAttribute('media'), 'to be', 'screen');

    window.togglePrint.toggle();

    expect(node.getAttribute('media'), 'to be', 'none');

    window.togglePrint.toggle();

    expect(node.getAttribute('media'), 'to be', 'screen');
  });
});
