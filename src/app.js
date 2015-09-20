'use strict';

// アプリ本体
// jQueryの読み込みが完了すると、これが実行される
var app = function ($) {
    console.info($.fn.jquery);
    console.info($('#foo').text());
};

module.exports = app;
