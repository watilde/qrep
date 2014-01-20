(function () {
  'use strict';
  var argv = process.argv;
  var qrep  = require('./main');
  var encoding = 'utf8';

  if (argv.length === 2 ||
    argv[2] === 'usage')
  {
    qrep.usage();
    return;
  }

  if (argv[4] === '-e' && argv[5]) {
    encoding = argv[5];
  }

  if (argv[3]) {
    if (argv[3].indexOf('http') === 0) {
      qrep.url(argv[2], argv[3], encoding);
      return;
    } else {
      qrep.file(argv[2], argv[3], encoding);
      return;
    }
  } else {
    qrep.stream(argv[2], process.stdin, encoding);
    return;
  }
}());
