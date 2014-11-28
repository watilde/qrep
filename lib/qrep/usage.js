module.exports = function () {
  'use strict';
  var message = '';
  message += 'Usage:\n';
  message += '    qrep selector filename\n';
  message += '    qrep selector url\n';
  message += '    standard output| qrep selector\n';
  message += '\nOption:\n';
  message += '    qrep selector filename -e encoding(default = utf8)\n';
  message += '    qrep selector url -e encoding(default = utf8)\n';
  message += '    curl -s -L url | qrep selector -e encoding(default = utf8)\n';
  message += '\ne.g.\n';
  message += '    qrep #logo ./tpl/index.html\n';
  message += '    qrep h1 http://example.com/\n';
  message += '    curl -s -L http://google.com| qrep title\n';

  console.log(message);
};
