// Dado um array de objetos representando alunos, cada um com nome e nota, escreva uma
// função que exibe. O nome de cada aluno e se ele foi aprovado (nota maior ou igual a 7) ou
// reprovado.
// ○ Exemplo:
// ■ const alunos = [ { nome: 'Ana', nota: 8 }, { nome: 'Carlos', nota: 5 }, { nome:
// 'João', nota: 7 } ]; resultadoAlunos(alunos); ===> Saida: Ana: Aprovado,
// Carlos: Reprovado, João: Aprovado

const alunos = [
  {
    nome: "Maya",
    nota: 9,
    // status: ""
  },
  {
    nome: "Macelo",
    nota: 5.5,
    // status: ""
  },
  {
    nome: "Wacelys",
    nota: 10,
    // status: ""
  }
];

function exibirAlunos(alunos){
  const resultado = alunos.map((aluno) => {
    aluno.status = aluno.nota >= 7 && aluno.nota <= 10 ? "aprovado" : "reprovado";
    return aluno;
  });
 
  return resultado;
}

function exibirAlunos2(alunos){
  return alunos.forEach((aluno) => {
    const nome = aluno.nome;
    const nota = aluno.nota;
    const situacao = nota >= 7 ? "aprovado" : "reprovado";

    console.log(`nome: ${nome}`, `situção: ${situacao}`);
  });
}

function sistemasDeNotas(array){
  const notasMaior7 = array.filter((alunos) => alunos.nota >= 7);
  const reprovados = array.filter((alunos) => alunos.nota < 7);

  console.log("alunos aprovados", notasMaior7);
  console.log("alunos reprovados", reprovados);
}

console.log(exibirAlunos(alunos));
exibirAlunos2(alunos);
sistemasDeNotas(alunos);