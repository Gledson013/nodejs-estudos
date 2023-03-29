const readLine = require('readline').createInterface({ //instanciei uma biblioteca nova que o node fornece e me ajuda a ler algo da minha linha de comando.
    input: process.stdin,
    output: process.stdout
});

const minhaPrimeiraConstanteString = 'Minha primeira constante';
console.log(minhaPrimeiraConstanteString);
let leituraDeCampo;
readLine.question('Informe sua idade:', input => {
    leituraDeCampo = input;
    console.log(`O usuario digitou: ${leituraDeCampo}`);
});
