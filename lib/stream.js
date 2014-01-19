module.exports = function (selectors, stream, encoding) {
  var jsdom = require("jsdom");
  var fs = require("fs");

  stream.resume();
  stream.setEncoding(encoding);

  var html = "";
  stream.on("data", function (chunk) {
    html += chunk;
  });
  stream.on("end", function () {
    jsdom.env(html, function (err, window) {
      var parent = window.document;
      var node = parent.querySelectorAll(selectors);
      for (var i = 0; node.length > i; i++) {
        console.log(node[i].outerHTML);
      }
    });
  });
};
