let num1 = parseInt(prompt("Informe o primeiro número:"));
let num2 = parseInt(prompt("Informe o segundo número:"));
let num3 = parseInt(prompt("Informe o último número:"));
let media = gerarMedia();
alert (`A média dos números é igual a ${media}`);

function gerarMedia(media) {
    return (num1+num2+num3)/3;
}