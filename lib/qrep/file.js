module.exports = function (selectors, filename, encoding) {
  'use strict';
  var jsdom = require('jsdom');
  var fs = require('fs');
  var path = require('path');
  var html = '';

  var isDir = fs.lstatSync(filename).isDirectory();
  if (!isDir) {
    html = fs.readFileSync(filename, encoding);
    jsdom.env(html, function (err, window) {
      var parent = window.document;
      var node = parent.querySelectorAll(selectors);
      for (var i = 0; node.length > i; i++) {
        console.log(node[i].outerHTML);
      }
    });
  } else {
    filename = path.resolve(filename);
    console.error('Error: ' + filename + ' is directory.');
  }
};
