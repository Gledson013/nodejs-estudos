const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log('Esse programa vai checar se voce e maior de 18 anos e tem habilitacao para saber se voce pode entrar no kart');
console.log('Alem de suas verificacoies, precisamos verificar se voce esta na lista de presenca do horario');

readLine.question('Qual o ano do seu nascimento?', ano => {
    if(ano > 2005){
        console.log('Voce não tem 18 anos');
    }else{
        readLine.question("Voce tem habilitação? (Sim/Nao)", temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === "SIM")){ // O !operador de negação torna a verificação do if FALSE.
                console.log('Voce não tem habilitação para entrar no kart'); // Dica: Para não ter problema de case, jogar tudo para maiusculo ou minusculo
            }else{
                readLine.question('Qual seu nome?', nome => {
                    switch(nome){
                        case 'Douglas':
                            console.log('Gledson, bem vindo a Verzel! Você foi aprovado no processo seletivo');
                            break;
                        case 'Rafael':
                            console.log('Bem Vindo ao Kart Gledson');
                            break;
                        default:
                            console.log('Seu nome não foi desaprovado na lista de presença');
                    }
                })
            }
        })
    }
});