let peso = parseFloat(prompt("Informe seu peso:"));
let altura = parseFloat(prompt("Informe a sua altura:"));
let imc;

function calcularIMC(parPeso, parAltura) {
    return parPeso/(parAltura*parAltura);
}

imc = calcularIMC(peso, altura);
alert(`O seu IMC é igual a ${imc.toFixed(2)}kg.`);