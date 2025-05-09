class FilaDePrioridade {
  constructor() {
    this.itens = [];
  }

  // Adiciona um elemento com prioridade
  enfileirar(valor, prioridade) {
    const novoItem = { valor, prioridade };
    let adicionado = false;

    for (let i = 0; i < this.itens.length; i++) {
      // Menor número = maior prioridade (ex: prioridade 1 > 5)
      if (prioridade < this.itens[i].prioridade) {
        this.itens.splice(i, 0, novoItem); // insere na posição correta
        adicionado = true;
        break;
      }
    }

    if (!adicionado) {
      this.itens.push(novoItem); // adiciona no final se não encontrou posição
    }
  }

  // Remove o item de maior prioridade (primeiro da fila)
  desenfileirar() {
    return this.itens.shift();
  }

  // Mostra o item de maior prioridade sem remover
  espiar() {
    return this.itens[0];
  }

  estaVazia() {
    return this.itens.length === 0;
  }

  imprimir() {
    console.log(this.itens.map(item => `${item.valor} (prioridade ${item.prioridade})`).join(' | '));
  }
}

// Exemplo de uso:
const fila = new FilaDePrioridade();
fila.enfileirar("Atender emergência", 1);
fila.enfileirar("Consulta de rotina", 5);
fila.enfileirar("Dor no peito", 2);

fila.imprimir();
// Saída: Atender emergência (prioridade 1) | Dor no peito (prioridade 2) | Consulta de rotina (prioridade 5)

console.log("Removendo:", fila.desenfileirar().valor); // "Atender emergência"
fila.imprimir();