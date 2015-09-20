'use strict';

// アプリ本体
// jQueryの読み込みが完了すると、これが実行される
var app = function ($) {
    test($);
    // エディタクラス
    var editor     = new Ine.Window.Editor();
    // キーワードバークラス
    var keywordBar = new Ine.Window.KeywordBar();

    console.info(keywordBar);
};

// 確認系
var test = function ($) {
    console.info('>', $.fn.jquery);
    console.info('>', $('#foo').text());
}

module.exports = app;
