'use strict';

// アプリ本体
// jQueryの読み込みが完了すると、これが実行される
var app = function ($) {

    var $editor     = $('#editor');
    var $keywordBar = $('#keywordBar');
    var $boxList    = $('#boxList');

    // ユーザーデータを管理するクラス
    var userContents = new Ine.Window.UserContents();
    // エディタクラス
    var editor       = new Ine.Window.Editor($editor);
    // キーワードバークラス
    var keywordBar   = new Ine.Window.KeywordBar($keywordBar);
    // ボックスリストを管理するクラス
    var boxList      = new Ine.Window.BoxList($boxList);

    // クラス共通で触ることができる
    Ine.Window.share = {
        userContents: userContents,
        editor      : editor,
        keywordBar  : keywordBar,
        boxList     : boxList
    };

    // セットアップ
    keywordBar.setup();
    editor.setup();

    test($);
};


// 確認系
var test = function ($) {
    console.info('>', $.fn.jquery);
    console.info('>', $('#foo').text());
}

module.exports = app;
