# qrep

grep like querySelectorAll.

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

Find selector in filename.

    $ qrep #logo ./tpl/index.html
    <header><span id="logo"></span></header>

Find selector on url.

    $ qrep span.octicon-logo-github https://github.com
    <span class="mega-octicon octicon-logo-github"></span>

Find selector with stdin.

    curl -s -L http://google.com | qrep title
    <title>Google</title>
