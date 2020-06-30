let should = require('should');

//
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise
//
describe('Promisse', function () {
    it('Basic', function () {

        should.ok(typeof Promise === "function");
        should.ok(typeof Promise.all === "function");
        should.ok(typeof Promise.race === "function");
        should.ok(typeof Promise.reject === "function");
        should.ok(typeof Promise.resolve === "function");

    })
})
