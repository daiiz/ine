'use strict';

var Editor = function (elem, option) {
    this.$elem = elem;
    var option = option || {};
    this.init(option || {});
};

Editor.prototype = {
    init: function (option) {
        var self = this;

        // 編集画面の内容を保持する
        // ここに保持された内容のみをファイルに保存できる
        self.contentsInfo = {};

        self.bindEvents();
        self.name = 'Editor';
    },

    getContents: function () {
        return self.contentsInfo;
    },

    // keywordBarのアクティブなキーワードが変更されたとき呼ばれる
    resetEditor: function (newKeyword) {
        console.info(newKeyword);
    },

    bindEvents: function () {
        var self = this;

        var $contentArea = self.$elem.find('.contents');
        var info = self.contentsInfo;
        // 編集画面でkeyupしたとき
        $contentArea.on('keyup', function (e) {
            info.contents = self.getContentsArr();
        });
    },

    getContentsArr: function () {
        var self = this;

        var $contentArea = self.$elem.find('.contents');
        var html = $contentArea[0].innerHTML;

        html = html.replace(/\<div\>\<br\>\<\/div\>/, '</div>');
        html = html.replace(/\<\/div\>\<div\>/, '</div>');
        html = html.replace(/\<div\>/gi, '</div>');

        var arr = html.split('</div>');
        var res = [];
        arr.forEach(function (str) {
            if (str !== '') res.push(str);
        });
        return res;
    }

};

module.exports = Editor;
