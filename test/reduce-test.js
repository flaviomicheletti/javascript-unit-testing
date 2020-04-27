let should = require('should');

describe('reduce', function () {

  //
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  //    
  describe('Intro', function () {
    it('executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno', function () {

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

