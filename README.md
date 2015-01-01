# qrep

**grep** meets **querySelectorAll**

## Badges
+ [![NPM Version](http://img.shields.io/npm/v/qrep.svg)](https://www.npmjs.org/package/qrep)
+ [![MIT LICENSE](http://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/watilde/qrep/blob/master/LICENSE)
+ [![Build Status](https://api.travis-ci.org/watilde/qrep.svg)](https://travis-ci.org/watilde/qrep)
+ [![Dependency Status](https://gemnasium.com/watilde/qrep.svg)](https://gemnasium.com/watilde/qrep)

## Install

Using npm.

    $ npm install -g qrep

Confirm.

    $ qrep usage

## Uninstall

    $ npm uninstall -g qrep

## Update

    $ npm update -g qrep

## Usage

    qrep selector filename
    qrep selector url

## Option
    qrep selector filename -e encoding(default = utf8)
    qrep selector url -e encoding(default = utf8)

## Example

Find selector in file.

    $ qrep #logo ./tpl/index.html
    <header><span id="logo"></span></header>

Find selector using URL.

    $ qrep span.octicon-logo-github https://github.com
    <span class="mega-octicon octicon-logo-github"></span>

Find selector with stdin.

    $ curl -s -L http://google.com | qrep title
    <title>Google</title>
