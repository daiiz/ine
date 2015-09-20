'use strict';

var Editor = function (option) {
    this.init(option || {});
};

Editor.prototype = {
    init: function (option) {
        var self = this;

        self.name = 'Editor';
    }
};

module.exports = Editor;
