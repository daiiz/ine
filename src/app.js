'use strict';

// アプリ本体
// jQueryの読み込みが完了すると、これが実行される
var app = function ($) {
    // エディタクラス
    var editor     = new Ine.Window.Editor();
    // キーワードバークラス
    var keywordBar = new Ine.Window.KeywordBar();
    // ボックスリストを管理するクラス
    var boxList    = new Ine.Window.BoxList();

    test($);
};

// 確認系
var test = function ($) {
    console.info('>', $.fn.jquery);
    console.info('>', $('#foo').text());
}

module.exports = app;
