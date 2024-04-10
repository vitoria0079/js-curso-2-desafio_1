let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarBotao1(){
    console.log ("O botão 1 foi pressionado.");
}

function verificarBotao2(){
    console.log ("O botão 2 foi pressionado.");
    alert ("Eu amo JS!");
}

function verificarBotao3(){
    console.log ("O botão 3 foi pressionado.");
    let nomeCidade = prompt ("Digite o nome de uma cidade do Brasil:");
    alert (`Estive em ${nomeCidade} e lembrei de você.`);
}

function verificarBotao4(){
    console.log ("O botão 4 foi pressionado.");
    let numero1 = parseInt(prompt("Insira um número:"));
    let numero2 = parseInt(prompt("Insira um segundo número:"));
    let soma;
    soma = numero1+numero2;
    alert (`A soma dos números é ${soma}.`);
}