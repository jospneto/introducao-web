let nome = "João";
let idade = 20;
let cidade = "São Paulo";

var nome2 = "Maria";

function printNome(nome){
  console.log('nome', nome);
}

// printNome("João");
// printNome(1);

const printNumero = (numero) => {
  if(numero > 10 && numero < 10){
    console.log('este número está entre 10 e 20');
  } else if(!(numero === 10)){
    console.log('este número não é 10');
  }else{
    console.log('numero é igual a 10');
  }
} 

const printNumero2 = (numero) => {
  switch(numero){
    case 1:
      console.log('numero é 1');
      break;
    case 2:
      console.log('numero é 2');
      break;
    default:
      console.log('numero não é 1 ou 2');
  }
}

printNumero(12);




// console.log("nome", nome);
// console.log("nome2", nome2);