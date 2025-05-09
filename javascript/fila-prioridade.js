// A fila é apenas um array de objetos { valor, prioridade }
const fila = [];

// Adiciona um novo item à fila com a prioridade correta
function enfileirar(fila, valor, prioridade) {
  const novoItem = { valor, prioridade };
  let adicionado = false;

  fila.forEach((item, index) => {
    if (!adicionado && prioridade < item.prioridade) {
      fila.splice(index, 0, novoItem);
      adicionado = true;
    }
  });

  if (!adicionado) {
    fila.push(novoItem); // insere no final se for de menor prioridade
  }
}

// Remove o item de maior prioridade (primeiro da fila)
function desenfileirar(fila) {
  return fila.shift();
}

// Espia o primeiro item da fila sem remover
function espiar(fila) {
  return fila[0];
}

// Imprime a fila
function imprimirFila(fila) {
  const texto = fila
    .map(item => `${item.valor} (prioridade ${item.prioridade})`)
    .join(' | ');
  console.log(texto);
}

// Exemplo de uso:
enfileirar(fila, "Atender emergência", 1);
enfileirar(fila, "Consulta de rotina", 5);
enfileirar(fila, "Dor no peito", 2);

imprimirFila(fila);
// Saída: Atender emergência (prioridade 1) | Dor no peito (prioridade 2) | Consulta de rotina (prioridade 5)

console.log("Removendo:", desenfileirar(fila).valor);
imprimirFila(fila);