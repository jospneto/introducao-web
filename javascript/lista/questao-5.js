// Escreva uma função chamada numeroPrimo que receba um número e retorne se ele é
// primo ou não. Um número primo é aquele que só pode ser dividido por 1 e por ele mesmo.

function numeroPrimo(numero){
  if(numero <= 1){
    return false;
  }

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

console.log("é numero primo", numeroPrimo(8));