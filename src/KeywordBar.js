'use strict';

var KeywordBar = function (elem, option) {
    this.$elem = elem;
    var option = option || {};
    this.init(option || {});
};

KeywordBar.prototype = {
    init: function (option) {
        var self = this;

        // キーワードをセットする

        // キーワードバーの横幅と、$editorのleftを決定する
        self.setWidth();
        // マウスイベントを仕掛ける
        self.bindEvents();

        self.name = 'KeywordBar';

    },

    setWidth: function () {
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

        Ine.Window.elems.$editor.css({
            left : maxWidth,
            width: window.innerWidth - maxWidth
        });
    },

    bindEvents: function () {
        
    }
};

module.exports = KeywordBar;
