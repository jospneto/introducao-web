// Dado um array de números, escreva uma função que:
// ○ Use filter para retornar apenas os números pares.
// ○ Use map para dobrar os números filtrados.
// ○ Exemplo:
// ■ const numeros = [1, 2, 3, 4, 5, 6]; dobrarPares(numeros); ===> Retorna [4, 8,
// 12]

function dobrarPares(numeros, numero){
  const pares = numeros.filter((numero) => numero % 2 === 0);
  const paresDobrados = pares.map((numero) => numero * 2);
  const buscaNumero = numeros.filter((numeroArray) => numeroArray === numero)?.[0];

  return console.log("paresDobrados", paresDobrados, "numeroBuscado", buscaNumero);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeroBuscado = 4;

dobrarPares(numeros, numeroBuscado);