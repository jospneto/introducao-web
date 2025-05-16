// Dado um array:
// const numeros = [3, 8, 12, 5, 21, 7, 10];
// Use o método map para criar um novo array onde cada número é multiplicado por 2.

function numerosPorDois(numeros){
  return numeros.map(numero => numero * 2);
}

const numeros = [3, 8, 12, 5, 21, 7, 10];
console.log("numeros por dois:", numerosPorDois(numeros));
