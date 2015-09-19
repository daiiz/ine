$(function() {

QUnit.test( "Test", function( assert ) {
    assert.ok($('#foo').length, 1);
    assert.ok($('#foo').text(), 'Foo!');
});

})();
