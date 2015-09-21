'use strict';

var assert = require('assert');
var UserContents = require('../../src/UserContents');

describe('Ine.Window.UserContents', function () {
    var uc;

    before(function () {
        uc = new UserContents();
    });

    describe('UserContentsの初期化', function () {
        it('UserContentsクラスをnewできる', function () {
            assert.equal(uc.name, 'UserContents');
        });
    });
});
