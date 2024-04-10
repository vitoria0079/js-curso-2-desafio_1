let numero = parseInt(prompt("Digite um número:"));
let resultado = gerarMultiplicacao();
alert(`O resultado da multiplicação é igual a ${resultado}.`);

function gerarMultiplicacao(resultado){
    return (numero*numero);
}