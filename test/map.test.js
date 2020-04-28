let should = require('should');

describe('Array.prototype.map()', function () {

	//
	// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
	//    
	describe('First example', function () {
		it('Mapeando um array de números para um array de raízes quadradas', function () {
			let numbers = [1, 4, 9];
			let roots = numbers.map(Math.sqrt);

			// roots é [1, 2, 3] mas numbers ainda é [1, 4, 9]
			should.deepEqual(roots, [1, 2, 3]);
			should.deepEqual(numbers, [1, 4, 9]);
		});

		it('Mapeando um array de números usando uma função callback que contém um argumento', function () {
			let numbers = [1, 4, 9];
			let doubles = numbers.map(function (num) {
				return num * 2;
			});

			// doubles é [2, 8, 18] mas numbers ainda é [1, 4, 9]
			should.deepEqual(doubles, [2, 8, 18]);
			should.deepEqual(numbers, [1, 4, 9]);
		});

		it('Usando map genericamente', function () {
			let map = Array.prototype.map;

			var expected = map.call('Hello World', function (x) { return x.charCodeAt(0); });
			should.deepEqual(expected, [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]);

			var expected = map.call('foo', function (x) { return x.charCodeAt(0); });
			should.deepEqual(expected, [102, 111, 111]);
		});
	});

	describe('Usando map para inverter uma string', function () {
		it('Exemplo completo', function () {
			let str = '12345';

			let result = [].map.call(str, function (x) {
				return x;
			}).reverse()
				.join('');

			should.deepEqual('54321', result);
		});

		it('Exemplo passo a passo', function () {
			let str = '12345';

			let arr = [].map.call(str, function (x) {
				return x;
			});

			should.deepEqual(['1', '2', '3', '4', '5'], arr);
			should.deepEqual(['5', '4', '3', '2', '1'], arr.reverse());
			should.equal("5,4,3,2,1", arr.join());
		});

		it('A mesmíssima coisa só que sem map', function () {
			let str = '12345';
			should.deepEqual('54321', str.split('').reverse().join(''));
		});

	});

});
