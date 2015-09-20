'use strict';

var KeywordBar = function (option) {
    var option = option || {};
    this.init(option || {});
};

KeywordBar.prototype = {
    init: function (option) {
        var self = this;

        self.name = 'KeywordBar';

    }
};

module.exports = KeywordBar;
