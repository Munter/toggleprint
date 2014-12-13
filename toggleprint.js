(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.togglePrint = factory();
  }
}(this, function () {
  // keep internal print on/off state
  var printMode = false;
  var screens = [];
  var prints = [];

  function toggle() {
    if (!printMode) {
      // query the dom each time print is toggled on. Detects possible dynamic loaded stylesheets
      var mediaNodes = Array.prototype.slice.call(document.getElementsByTagName('link')).filter(function (node) {
        return node.getAttribute('rel').toLowerCase() === 'stylesheet' && node.hasAttribute('media');
      });

      // When toggling, find media print and media screen files and track
      screens = mediaNodes.filter(function (node) {
        return node.getAttribute('media').toLowerCase() === 'screen';
      });
      prints = mediaNodes.filter(function (node) {
        return node.getAttribute('media').toLowerCase() === 'print';
      });
    }

    printMode = !printMode;

    screens.forEach(function (node) {
      // When toggling print on, set media screen styles to 'none' (is ths possible?)
      node.setAttribute('media', printMode ? 'none' : 'screen');
    });
    prints.forEach(function (node) {
      // When toggling print on, set media print styles to 'all'
      node.setAttribute('media', printMode ? 'all' : 'print');
    });
  }

  function togglePrint(options) {
    options = options || {};

    options.key = options.key || 'p';

    document.addEventListener('keydown', function (e) {
      if (String.fromCharCode(e.keyCode).toLowerCase() === options.key.toLowerCase()) {
        toggle();
      }
    });
  }

  togglePrint.toggle = toggle;

  return togglePrint;
}));
