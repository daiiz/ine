'use strict';

var userContents = function (option) {
    var option = option || {};
    this.init(option || {});
};

userContents.prototype = {
    init: function (option) {
        var self = this;

        // これを直接触ることは禁止
        self.contents = {};
    },

    setup: function () {

    },

    // indexを与えられてcontentオブジェクトを返す
    getContentByIndex: function (idx) {

    },

    // contentの総数を返す
    getContentsLength: function () {

    },

    // キーワードを与えられてindexを返す
    // 存在しない場合はnullを返す
    getIndexByKeyword: function () {

    },

    // 与えられた情報からcontentオブジェクトを構成して新規登録する
    // keywordIdを返す
    addNewContent: function (keyword, isAppData) {

    },

    // 保持しているcontentsをlocalStorageにキープする
    keepLocalStorage: function () {

    }
};

module.exports = userContents;
