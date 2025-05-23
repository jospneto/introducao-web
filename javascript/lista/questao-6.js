// Escreva uma função que receba um array de números e retorne um novo array contendo o
// quadrado dos números que são maiores que 10. (EXTRA)

const numeros = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function quadrado(array){
  const maiores = array.filter((numeros) => numeros > 10);
  const quadrado = maiores.map((numeros) => numeros * numeros);

  return quadrado;
}

function logicaDosMetodos(array){
  return array.filter(numero => numero > 10).map(numero => numero ** 2);
}

function sidneyFez(numeros){
  const resultado = numeros.map((numero) => {
    const valor = numero > 10 ? numero ** 2 : numero;
    return valor;
  }).filter(numero => numero > 10);

  return resultado;
}

const final = quadrado(numeros);

console.log("quadrado dos números maiores que 10:", final);
console.log("quadrado dos números:", sidneyFez(numeros));