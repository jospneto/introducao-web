// Dado o array de estudantes:
// const estudantes = [ { nome: "Ana", nota: 7.5 }, { nome: "Pedro", nota: 5.0 }, { nome: "Mariana", nota: 9.0 }, { nome: "João", nota: 6.5 }, { nome: "Carlos", nota: 8.0 } ];
// Use o método filter para retornar apenas os estudantes que têm nota maior ou igual a 7.

const estudantes = [ { nome: "Ana", nota: 7.5 }, { nome: "Pedro", nota: 5.0 }, { nome: "Mariana", nota: 9.0 }, { nome: "João", nota: 6.5 }, { nome: "Carlos", nota: 8.0 } ];
const notasMaiorQueSete = estudantes.filter((estudante) => estudante.nota >= 7);

console.log("Estudantes com nota maior que 7:", notasMaiorQueSete);
