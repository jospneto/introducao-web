// Escreva uma função que receba um array de strings e as ordene em ordem alfabética. Não
// use localeCompare.
// ○ Exemplo:
// ■ const frutas = ['maçã', 'laranja', 'banana']; ordenarFrutas(frutas); ===>
// Retorna ['banana', 'laranja', 'maçã']

const ordenaAlfabeticamente = (frutas) => {
  return frutas.sort((a, b) => {
    if (a > b){
      return 1;
    }

    if(a < b){
      return -1
    }
  });
}

const ordenacaoResumida = (frutas) => {
  return frutas.sort();
}

const localeCompareOrdenacao = (frutas) => {
  return frutas.sort((a, b) => a.localeCompare(b));
}

const frutas = ['maçã', 'laranja', 'banana'];

console.log("frutas", ordenaAlfabeticamente(frutas));
console.log("frutas2", ordenacaoResumida(frutas));
console.log("frutas3", localeCompareOrdenacao(frutas));