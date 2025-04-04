const pessoa = {
  nome: "João",
  idade: 20,
  cidade: "Cajazeiras",
  email: "joao@gmail.com",
  telefone: "1234567890",
  genero: "Masculino",
  endereco: {
    rua: "Rua das Flores",
    numero: 123,
    bairro: "Centro"
  }
}

console.log('print', pessoa.nomeSobrenome);
console.log('print', pessoa.idade);
console.log('print', pessoa.cidade);
console.log('print', pessoa.email);
console.log('print', pessoa.telefone);
console.log('print', pessoa.genero);
console.log('print', pessoa.endereco.bairro, pessoa.endereco.rua, pessoa.endereco.numero);

pessoa.nome = 'Maria';

console.log('novo', pessoa.nome);

console.log('keys', Object.keys(pessoa));
console.log('keys', Object.entries(pessoa));
console.log('values', Object.values(pessoa));
