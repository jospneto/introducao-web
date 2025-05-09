class FilaDePrioridade {
  constructor(){
    this.itens = [];
  }

  enfileirar(valor, prioridade){
    const novoItem = { valor, prioridade };
    let adicionado = false;
     
    for(let i = 0; i < this.itens.length; i++){
      if(!adicionado && prioridade < this.itens[i].prioridade){
        this.itens.splice(i, 0, novoItem);
        adicionado = true;
        break;
      }
    }

    if(!adicionado){
      this.itens.push(novoItem);
    }
  }

  desenfileira(){
    return this.itens.shift();
  }

  espiar(){
    return this.itens[0];
  }

  estaVazia(){
    return this.itens.length === 0;
  }

  imprimir(){
    console.log(this.itens.map(item => `${item.valor} (prioridade ${item.prioridade})`).join(' | '));
  }
}

const fila = new FilaDePrioridade();
fila.enfileirar("Atender emergência", 2);
fila.enfileirar("Consulta de rotina", 5);
fila.enfileirar("Dor no peito", 1);
fila.enfileirar("Gripe severa", 3);

const itemRemovido = fila.desenfileira();

fila.desenfileira();
fila.desenfileira();
fila.desenfileira();
fila.desenfileira();

fila.enfileirar("Dengue", 0);

console.log("Removendo:", itemRemovido?.valor);
console.log("Espiando:", fila.espiar()?.valor);
console.log("Esta vazia?", fila.estaVazia());
// fila.imprimir();