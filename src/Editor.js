'use strict';

var Editor = function (elem, option) {
    this.$elem = elem;
    var option = option || {};
    this.init(option || {});
};

Editor.prototype = {
    init: function (option) {
        var self = this;

        self.name = 'Editor';
    },

    // keywordBarのアクティブなキーワードが変更されたとき呼ばれる
    resetEditor: function (newKeyword) {
        console.info(newKeyword);
    }
};

module.exports = Editor;
