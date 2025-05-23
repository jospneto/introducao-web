// Escreva uma função que receba a idade de uma pessoa e retorne uma mensagem
// indicando:
// ○ "Menor de idade" se a idade for menor que 18.
// ○ "Maior de idade" se a idade for 18 ou mais

function verificarIdade(idade){
  if (idade < 18){
    console.log("Menor idade");
  }else if(idade >= 18){
    console.log("Maior idade");
  }
}

const verificarFuncaoTernario = () => {
  return idade > 0 && idade < 18 ? "Menor idade" : "Maior idade";
}

const idadeTernario = idade > 0 && idade < 18 ? "Menor idade" : "Maior idade";