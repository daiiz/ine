'use strict';

var _ = require('underscore');

var jQuery = require('jquery');
var app    = require('./app');

(function ($) {

    // Ine.* に展開
    window.Ine = _.extend((window.Ine || {}), {
        base : require('./base')
    });

    // Ine.Window.* に展開
    window.Ine.Window = _.extend((window.Ine.Window || {}), {
        Editor    : require('./Editor'),
        KeywordBar: require('./KeywordBar'),
        BoxList   : require('./BoxList')
    });

    // アプリ本体
    app($);

})(jQuery);
