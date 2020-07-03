let should = require('should');

//
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//
describe('Arrow functions', function () {
    it('typeof', function () {

        should.ok(typeof (() => { }) == "function");

        let empty = () => { };
        should.ok(typeof empty === "function");

    })

    it('Uma arrow function vazia retorna undefined', function () {

        let empty = () => { };
        should.equal(empty(), undefined);

        // IIEF
        should.ok((() => { })() == undefined);

    })
})
