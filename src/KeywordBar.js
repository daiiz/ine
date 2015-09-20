'use strict';
var _ = require('underscore');
// Pythonのformat関数の基本的なやつを真似たもの
String.prototype.format = require('./format');

var KeywordBar = function (elem, option) {
    this.$elem = elem;
    var option = option || {};
    this.init(option || {});
};

KeywordBar.prototype = {
    init: function (option) {
        var self = this;

        // Observeする値
        self.observeValues = {
            activeId: 'keyword-表紙'
        };

        // イベントを仕掛ける
        self.bindEvents();

        self.name = 'KeywordBar';

    },

    setup: function () {
        var self = this;

        self.executeWidth();
    },

    // キーワードバーにキーワードを追加する
    addKeyword: function (keyword) {
        var self = this;
        var template = '<div class="keyword" id="keyword-{}">{}</div>';

        var keywordElem = self.$elem.find('#keyword-' + keyword);
        if (keywordElem.length === 0) {
            var $stage = self.$elem.find('#keywords');
            var tag = template.format(keyword, keyword);
            $stage.append(tag);
        }
    },

    // キーワードバーの横幅と、$editorのleftを決定する
    executeWidth: function () {
        var self = this;

        var DEFAULT_WIDTH = 112;
        var $bar = self.$elem;
        var $keywords = $bar.find('.keyword');

        var maxWidth = 0;
        for (var i = 0; i < $keywords.length; i++) {
            var keyword = $keywords[i];
            var width = keyword.offsetWidth;
            if (width > maxWidth) {
                maxWidth = width;
            }
        }
        var maxWidth = Math.max(maxWidth, DEFAULT_WIDTH) + 8;

        $bar.css({
            width: maxWidth
        });

        Ine.Window.share.editor.$elem.css({
            left : maxWidth,
            width: window.innerWidth - maxWidth
        });

        // 縦線
        Ine.Window.share.editor.$elem.find('.line').css({
            left : maxWidth + 22,
        });
    },

    bindEvents: function () {
        var self = this;

        var $bar = self.$elem;

        // リスト内のキーワードがクリックされたとき
        $bar.on('click', '.keyword', function (e) {
            var nowActiveId = self.observeValues.activeId;
            $bar.find('#' + nowActiveId).removeClass('active');
            self.observeValues.activeId = e.target.id;
            $bar.find('#' + self.observeValues.activeId).addClass('active');
        });

        Object.observe(self.observeValues, function (changes) {
            changes.forEach(function (change) {
                // activeなキーワードが変更された場合
                if (change.name === 'activeId') {
                    Ine.Window.share.editor.resetEditor(change.object.activeId);
                    //console.info(change.type, change.oldValue);
                }
            });
        });

    }
};

module.exports = KeywordBar;
