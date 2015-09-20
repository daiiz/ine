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
        self.activeId = 'foo';
        // マウスイベントを仕掛ける
        self.bindEvents();

        self.name = 'KeywordBar';

    },

    setup: function () {
        var self = this;

        self.executeWidth();
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
    },

    bindEvents: function () {
        var self = this;

        var $bar = self.$elem;
        $bar.on('click', '.keyword', function (e) {
            $bar.find('#' + self.activeId).removeClass('active');
            self.activeId = e.target.id;
            $bar.find('#' + self.activeId).addClass('active');
        });
    }
};

module.exports = KeywordBar;
