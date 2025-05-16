// Dado o seguinte array de objetos que representa produtos:
// const produtos = [ { nome: "Notebook", preco: 2500 }, { nome: "Mouse", preco: 100 }, { nome: "Teclado", preco: 300 }, { nome: "Monitor", preco: 1200 }];
// Use o método sort para ordenar os produtos em ordem crescente de preço.

const produtos = [ { nome: "Notebook", preco: 2500 }, { nome: "Mouse", preco: 100 }, { nome: "Teclado", preco: 300 }, { nome: "Monitor", preco: 1200 }];
const produtosPorPreco = () => {
  return produtos.sort((a, b) => a.preco - b.preco);
}

console.log(produtosPorPreco());