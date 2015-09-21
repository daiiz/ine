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
        // ボックス毎にひとつ用意する
        self.userContents = {
            boxName : 'Box-0',
            // 略称: ucc
            // keywordIdはレンダリングの度に異なっていてよい
            contents: [
                {keyword: '表紙', html: 'Hello, world!<br>`daiiz`', contentsArr: [], isAppData: true, keywordId: 'main-keyword-toppage'}
            ]
        };
        // activeIdをもつcontentsのindex
        self.activeContentsIdx = 0;

        self.bindEvents();
        self.name = 'Editor';
    },

    // keywordIdを決定して、登録して、idを返す
    // 既に登録されている場合はfalseを返す
    addUserContent: function (keyword, isAppData) {
        var self = this;

        var ucc = self.userContents.contents;
        var existingId = false;

        ucc.forEach(function (content) {
            if (content.keyword === keyword) {
                existingId = content.keywordId;
            }
        });

        if (existingId === false) {
            // 新規登録
            if (isAppData === undefined) isAppData = false;
            var newId = 'keyword-' + ucc.length;
            if (isAppData) newId = 'main-' + newId;

            var content = {
                keyword    : keyword,
                html       : '',
                contentsArr: [],
                isAppData  : isAppData,
                keywordId  : newId
            };

            self.userContents.contents.push(content);
            return newId;
        }else {
            return false;
        }
    },

    setup: function () {
        var self = this;
        var keywordBar = Ine.Window.share.keywordBar;

        if (self.userContents.contents.length > 0) {
            // #main-keyword-toppage をセットする
            // 自動でself.resetEditorが呼ばれる
            // その後、self.createKeywordが呼ばれる
            keywordBar.setActiveId('main-keyword-toppage');
        }
    },

    // 外部クラスに向けたもの
    getContents: function () {
        var self = this;

        return self.userContents;
    },

    // keywordBarのアクティブなキーワードが変更されたとき、O.oに呼ばれる
    resetEditor: function (newKeywordId) {
        var self = this;
        self.$elem.find('.contents').html('');
        self.activeContentsIdx = undefined;

        var ucc = self.userContents.contents;
        ucc.forEach(function (content, idx) {
            if (content.keywordId === newKeywordId) {
                self.$elem.find('.contents').html(content.html);
                self.activeContentsIdx = idx;
                // キーワードを抽出
                self.createKeyword(self.$elem.find('.contents').text());
            }
        });
    },

    bindEvents: function () {
        var self = this;
        var BACK_QUOTE = 192;

        var $contentArea = self.$elem.find('.contents');

        // 編集画面でkeyupしたとき
        $contentArea.on('keyup', function (e) {
            var $contentArea = self.$elem.find('.contents');
            var ucc = self.userContents.contents;
            var idx = self.activeContentsIdx;

            if (idx === undefined) {
                // 何らかの理由でキーワードがuccに登録できていない
                return;
            }
            ucc[idx].contentsArr = self.getContentsArr();
            ucc[idx].html = $contentArea.html();
            if (e.keyCode === BACK_QUOTE) {
                self.createKeyword($contentArea.text());
            }
        });
    },

    // バッククオートで囲まれた文字列を探してキーワードリストに追加する
    createKeyword: function (text) {
        if (text.match(/\`/gi) !== null && text.match(/\`/gi).length % 2 === 0) {
            // バッククオートで囲まれた文字列を取得する
            var keywords = text.match(/`.+?`/gi);
            keywords = keywords.map(function (keyword) {
                return keyword.substring(1, keyword.length - 1);
            });
            // 不要なキーワードをリストから除去する
            Ine.Window.share.keywordBar.autoRemoveKeywords(keywords);
            // キーワードを追加する
            keywords.forEach(function (keyword) {
                Ine.Window.share.keywordBar.addKeyword(keyword);
            });
        }
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
