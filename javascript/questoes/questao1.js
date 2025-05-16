// Dado o array de números:
// const numeros = [2, 5, 8, 13, 20, 17, 4, 6];
// Use o método filter para criar um novo array contendo apenas os números pares.
// Use o método reduce para calcular a soma dos números pares filtrados.

const numeros = [2, 5, 8, 13, 20, 17, 4, 6];

const pares = numeros.filter(numero => numero % 2 === 0);
const soma = pares.reduce((acumulador, numero) => acumulador + numero, 0);

function somaPares(array){
  const pares = array.filter(numero => numero % 2 === 0);
  const soma = pares.reduce((acumulador, numero) => acumulador + numero, 0);
  return soma;
};

const somaParesArrowFunction = (array) => {
  const pares = array.filter(numero => numero % 2 === 0);
  const soma = pares.reduce((acumulador, numero) => acumulador + numero, 0);
  return soma;
};

console.log("soma pares:", somaPares(numeros));
console.log("soma pares arrow function:", somaParesArrowFunction(numeros));

const produtos = [
  { id: 1, nome: '2', preco: 10.99 },
  { id: 2, nome: '1', preco: 19.99 },
  { id: 3, nome: '3', preco: 29.99 },
  { id: 4, nome: '5', preco: 39.99 },
  { id: 5, nome: '6', preco: 49.99 }
];

// const produtosOrdenadosPorPreco =  produtos.sort((a, b) => b.preco - a.preco);
const produtosOrdenadosPorNome = produtos.sort((a, b) => a.nome - b.nome);
const somaProdutos = produtos.reduce((acumulador, produto) => acumulador + produto.preco, 0);
// console.log("produtosOrdenadosPorPreco", produtosOrdenadosPorPreco);
console.log("produtosOrdenadosPorNome", produtosOrdenadosPorNome);
console.log("somaProdutos", somaProdutos);

