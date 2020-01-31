var assert = require('assert');
var foo = require('../index.js');

suite('Foo,', function(){
    suite('bar()', function(){
        test('foo bar', function(){  
            assert.equal("foobar", foo.bar());
        });
    });
});

// var assert = require('assert');

// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// })