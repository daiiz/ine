'use strict';

var assert = require('assert');
var jsdom  = require('jsdom');

var testDocument = jsdom.jsdom('<html><body></body></html>');

var Editor = require('../../src/Editor');

describe('Ine.Window.Editor', function () {
    var e;

    before(function () {
        e = new Editor();
    });

    describe('Editor', function () {
        it('エディターを読み込みできる', function () {
            assert.equal(e.name, 'Editor');
        });
    });
});
