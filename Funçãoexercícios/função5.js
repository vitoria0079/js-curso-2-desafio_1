let num = parseInt(prompt("Digite um número de 1 a 10."));
let contador = 0;
while (contador < 11) {
    let resultado = tabuada(num);
    function tabuada(xNum){
        return num * contador;
    }
    contador++;
    alert(`A tabuada é ${resultado}.`);
}