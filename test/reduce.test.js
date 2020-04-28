const should = require('should');
const assert = require('assert');

describe('Array.prototype.reduce()', function () {

    //
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    //    
    describe('First Example', function () {

        const array = [1, 2, 3, 4];

        it('Erro', function () {

            try {
                assert.throws(array.reduce());
            } catch (e) {

            }

        });


        it('Executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno', function () {

            //
            // um array qualquer
            //
            const array = [1, 2, 3, 4];

            //
            // aqui temos uma arrow function, nosso reducer
            //
            const reducer = (accumulator, currentValue) => accumulator + currentValue;

            // 1 + 2 + 3 + 4
            should.equal(10, array.reduce(reducer));

            // 5 + 1 + 2 + 3 + 4
            should.equal(15, array.reduce(reducer, 5));

        });


        it('Função que é executada em cada valor no array', function () {

            const array = [10, 20, 30, 40];

            const reducer = (accumulator, currentValue) => accumulator + currentValue;

            // 10 + 20 + 30 + 40 + 50
            initialValue = 50;
            should.equal(150, array.reduce(reducer, initialValue));

            // (exceto no primeiro, se nenhum valorInicial for passado)
            should.equal(100, array.reduce(reducer));

            const letters = ['a', 'b', 'c', 'd'];
            const otherReducer = (accumulator) => accumulator;

        });


        it('A função reducer é alimentada por quatro parâmetros.', function () {
            const array = [1, 2, 3, 4];

            const reducer = (accumulator, currentValue, currentIndex, sourceArray) => console.log({
                'currentIndex': currentIndex,
                'currentValue': currentValue,
                'accumulator': accumulator,
                'sourceArray': sourceArray
            });

            // array.reduce(reducer);
            should.equal(123, 123);
        });

    });

});

