# Node testing

Testando as coisas em Node.


Dependências

    npm install -g mocha
    npm install should --save-dev

Instalando...

    npm install


Exemplo tdd

    suite('Foo,', function () {
    suite('bar()', function () {
        test('foo bar', function () {
        assert.equal("foobar", foo.bar());
        });
    });
    });

    ./node_modules/mocha/bin/mocha  --ui tdd

Exemplo bdd...


