let should = require('should');

describe('parseInt', function () {

  //
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  //    
  describe('Intro', function () {
    it('Analisa um argumento string e retorna um inteiro na base especificada', function () {

      //
      // parseInt(string, base);
      //
      should.equal(123, parseInt("123", 10));

    });

    it('Espaços no início e fim são permitidos.', function () {
      should.equal(123, parseInt("  123  ", 10));
    });
  });

  // Se parseInt encontrar um caracter que não seja um numeral na base especificada,
  // ele o ignora e a todos os caracteres subsequentes e retorna o valor inteiro analisado
  // até aquele ponto. parseInt trunca números para valores inteiros.
  describe('Encontrar um caracter que não seja um numeral na base especificada', function () {
    it('exemplos', function () {
      should.equal(12, parseInt("12abc3", 10));
      should.equal(1, parseInt("1a2bc3", 10));
    });

  });

  describe('Exemplos da documentação da MDN', function () {
    it('Sempre retornam 15', function () {
      should.equal(15, parseInt(" 0xF", 16));
      should.equal(15, parseInt(" F", 16));
      should.equal(15, parseInt("17", 8));
      should.equal(15, parseInt(021, 8));
      should.equal(15, parseInt("015", 10));
      should.equal(15, parseInt(15.99, 10));
      should.equal(15, parseInt("FXX123", 16));
      should.equal(15, parseInt("1111", 2));
      should.equal(15, parseInt("15*3", 10));
      should.equal(15, parseInt("15e2", 10));
      should.equal(15, parseInt("15px", 10));
      should.equal(15, parseInt("12", 13));
    });

    it('Sempre retornam NaN', function () {

      // Não é realmente um número
      should.deepEqual(NaN, parseInt("Hello", 8));
      should.ok(isNaN(parseInt("Hello", 8)));

      // Dígitos não são válidos para representações binárias    
      should.deepEqual(NaN, parseInt("546", 2));
      should.ok(isNaN(parseInt("546", 2)));

    });

  });

});
