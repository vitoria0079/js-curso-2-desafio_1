let raio = parseFloat(prompt("Digite o raio do círculo:"));
let area;
let perimetro;

function perimetroCircular(xRaio) {
    return (2*3.14*raio);
}
perimetro = perimetroCircular(raio);
alert(`O perímetro do círculo é ${perimetro.toFixed(2)}`);

function areaCircular(xRaio) {
    return 3.14*(raio*raio);
}
area = areaCircular(raio);
alert(`A área do círculo é ${area.toFixed(2)}`);