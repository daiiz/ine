'use strict';

// アプリ本体
// jQueryの読み込みが完了すると、これが実行される
var app = function ($) {

    var $editor     = $('#editor');
    var $keywordBar = $('#keywordBar');
    var $boxList    = $('#boxList');

    // クラス共通で触ることができる要素
    Ine.Window.elems = {
        $editor    : $editor,
        $keywordBar: $keywordBar,
        $boxList   : $boxList
    };

    // エディタクラス
    var editor     = new Ine.Window.Editor($editor);
    // キーワードバークラス
    var keywordBar = new Ine.Window.KeywordBar($keywordBar);
    // ボックスリストを管理するクラス
    var boxList    = new Ine.Window.BoxList($boxList);

    console.info(editor);
    test($);
};

// 確認系
var test = function ($) {
    console.info('>', $.fn.jquery);
    console.info('>', $('#foo').text());
}

module.exports = app;
