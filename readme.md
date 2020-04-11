![era para aparecer uma imagem tio](unit-testing-javascript-using-mocha-and-node.jpg)

# Unit testing JavaScript (mocha + node.js) 

Testando as coisas em JavaScript no servidor (Node.js).

Dependências

    npm install -g mocha
    npm install should --save-dev

Instalando...

    npm install

Testando

    npm test
    # mocha


Versão standalone, devez em quando funciona...

    ./node_modules/mocha/bin/mocha --ui tdd


### Último teste executado

    Array
      IndexOf()
        ✓ should return -1 when the value is not present

    Map
      Intro
        ✓ Mapeando um array de números para um array de raízes quadradas
        ✓ Mapeando um array de números usando uma função callback que contém um argumento
        ✓ usando map genericamente
      Usando map para inverter uma string
        ✓ exemplo completo
        ✓ exemplo passo a passo
        ✓ A mesmíssima coisa só que sem map


    7 passing (9ms)

### Executar o lint

    npm run-script lint

    or

    eslint --ext test

    or 

    npx eslint *.js test
