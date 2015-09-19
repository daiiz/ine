'use strict';

var _ = require('underscore');

var jQuery = require('jquery');

(function ($) {

    // Ine.* に展開
    window.Ine = _.extend((window.Ine || {}), {
        base : require('./base')
    });

    console.info($.fn.jquery);
})(jQuery);
