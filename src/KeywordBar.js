'use strict';

var KeywordBar = function (elem, option) {
    this.$elem = elem;
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
