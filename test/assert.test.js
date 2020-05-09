let assert = require('assert');

//
// https://nodejs.org/api/assert.html 
//
describe('assert', function () {
    it('Generate an AssertionError to compare the error message later', function () {

        const { message } = new assert.AssertionError({
            actual: 1,
            expected: 2,
            operator: 'strictEqual'
        });

        try {
            assert.strictEqual(1, 2);
        } catch (err) {
            assert(err instanceof assert.AssertionError);
            assert.strictEqual(err.message, message);
            assert.strictEqual(err.name, 'AssertionError');
            assert.strictEqual(err.actual, 1);
            assert.strictEqual(err.expected, 2);
            assert.strictEqual(err.code, 'ERR_ASSERTION');
            assert.strictEqual(err.operator, 'strictEqual');
            assert.strictEqual(err.generatedMessage, true);
        }

    })
})

//
// https://stackoverflow.com/questions/21587122/mocha-chai-expect-to-throw-not-catching-thrown-errors
//
describe('Assert Throw', function () {

    it('assert.throws', function () {

        // FAIL.  x.y.z throws an exception, which immediately exits the
        // enclosing block, so assert.throw() not called.
        try {
            assert.throws(x.y.z);
        } catch (err) {
            assert.strictEqual(err.name, 'ReferenceError');
        }

        // assert.throw() is called with a function, which only throws
        // when assert.throw executes the function.
        assert.throws(() => x.y.z);

        // if you cannot use ES6 at work
        assert.throws(function () { x.y.z });
        // for the verbose
        function badReference() { x.y.z }; assert.throws(badReference);
        // the specific example given.
        assert.throws(() => model.get(z));

        assert.throws(() => x.y.z);
        assert.throws(() => x.y.z, ReferenceError);
        assert.throws(() => x.y.z, ReferenceError, /is not defined/);
        assert.throws(() => x.y.z, /is not defined/);
        assert.doesNotThrow(() => 42);
        assert.throws(() => x.y.z, Error);

        try {
            assert.throws(() => model.get.z, /Property does not exist in model schema./)
        } catch (err) {

        }

    })
})