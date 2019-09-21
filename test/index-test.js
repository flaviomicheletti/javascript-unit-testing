var assert    = require('assert');
var foo = require('../index.js');

suite('Foo,', function(){
    suite('bar()', function(){
        test('foo bar', function(){  
            assert.equal("foobar", foo.bar());
        });
    });
});