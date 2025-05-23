// Crie uma função que utilize o método reduce para calcular a soma de todos os elementos
// de um array de números. (EXTRA)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function somarElementos(numeros){
  const valorInicial = 0;
  const resultado  = numeros.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
  }, valorInicial);

  return resultado;
}

function transformaString(numeros){
 return numeros.reduce((acumulador, valorAtual) => acumulador.nota = valorAtual, { nota: 0 })
}

console.log("soma:", somarElementos(numeros));
console.log("notas:", transformaString(numeros));

