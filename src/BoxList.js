'use strict';

var BoxList = function (option) {
    var option = option || {};
    this.init(option || {});
};

BoxList.prototype = {
    init: function (option) {
        var self = this;

        self.name = 'BoxList';
    }
};

module.exports = BoxList;
