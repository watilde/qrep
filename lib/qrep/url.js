module.exports = function (selectors, url, encoding) {
  'use strict';
  var jsdom = require('jsdom');

  jsdom.env({
    url: url,
    encoding: encoding,
    done: function (errors, window) {
      var parent = window.document;
      var node = parent.querySelectorAll(selectors);
      for (var i = 0; node.length > i; i++) {
        if (i === 0) {
          console.log(node[i].outerHTML);
        }
      }
    }
  });
};
