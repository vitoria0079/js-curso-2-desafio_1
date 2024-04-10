let dolar = parseFloat(prompt("Informe o valor:"));
let real = transformarReal (dolar);

function transformarReal(dolar) {
    return dolar*4.80;
}
alert(`A transferência do ${dolar} para reais é igual à ${real.toFixed(2)}`);