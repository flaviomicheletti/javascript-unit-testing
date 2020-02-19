let assert = require('assert');
let foo = require('../index.js');

describe('Array', function () {
  describe('IndexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal("foobar", foo.bar());
    });
  });
})
