// Dado o array de idades:
// const idades = [12, 17, 22, 14, 19, 25, 30, 16];
// Use o método filter para criar um novo array com as idades maiores ou iguais a 18.

const idades = [12, 17, 22, 14, 19, 25, 30, 16];
const idadesMaiores18 = idades.filter((idade) => idade >= 18);

console.log("idades maiores que 18", idadesMaiores18);

