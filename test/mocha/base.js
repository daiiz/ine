'use strict';

var assert = require('assert');
var jsdom  = require('jsdom');

var testDocument = jsdom.jsdom('<html><body></body></html>');

var base = require('../../src/base');

describe('Ine.base', function () {
    var $;

    before(function () {
    });

    describe('基本設定読み取り系', function () {
        it('base', function () {
            assert.equal(base(), true);
        });
    });
});
