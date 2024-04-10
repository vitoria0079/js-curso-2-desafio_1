let numero = parseInt(prompt("Insira um número:"));
let resultado = 1;
function numeroFatorial(fatNumero) {
    if (fatNumero == 0) {
        return 1;
    }
    while (fatNumero != 0) {
        resultado *= fatNumero;
        fatNumero-=1;
    }
    return resultado
}
numeroFatorial(numero);
alert(`O fatorial do número ${numero} é igual a ${resultado}`);