let assert = require('assert');
let foo = require('../src/foo.js');

describe('Testing Foo', function () {
    describe('bar()', function () {
        it('Should return -1 when the value is not present', function () {
            assert.equal("foobar", foo.bar());
        });
    });
});
