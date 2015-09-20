'use strict';

var format = function() {
    var str = this.toString();
    var args = arguments;
    // {} の個数を確認
    var len_blanks = (str.match(/\{\}/g) || []).length;
    // 引数の個数を確認
    var len_args = args.length;
    // 個数が一致しない場合は文字列をそのまま返す
    if(len_args != len_blanks) return str;
    // 個数が一致していれば置換作業を行う
    for(var i=0; i < args.length; i++) {
        str = str.replace(/\{\}/, args[i]);
    }
    return str;
}

module.exports = format;
