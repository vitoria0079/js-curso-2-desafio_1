let largura = parseFloat(prompt("Informe a largura do retângulo:"));
let altura = parseFloat(prompt("Informe a altura do retângulo:"));
let area;
let perimetro;

function calculoArea(parAltura, parLargura) {
   return area = parLargura*parAltura;
}

function calcularPerimetro(parAltura, parLargura) {
    return perimetro = (parAltura*2)+(parLargura*2);
}

area = calculoArea(altura, largura);
perimetro = calcularPerimetro(altura, largura);

alert(`A área do retângulo é igual a ${area} e o perímetro é ${perimetro}.`);