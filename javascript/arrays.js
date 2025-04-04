const array = [1, 2, 4, 6, 5];
const nomes = ['João', 'Maria', 'José', 'Ana', 'Pedro'];

// console.log('array', array);

// for(let i = 0; i < array.length; i++){
//   console.log('print', array[i]);
// }

// let i = 0;

// while(i <= array.length){
//   console.log('print', array[i]);
//   i += 1;
// }

// do {
//   console.log('print', array[i]);
//   i += 1;
// } while(i <= array.length);

// array.sort((a, b) => b - a);
const newArray = array.sort((a, b) => b - a).filter(item => item % 2 === 0);
const newArray2 = array.find(item => item % 2 === 0);

// console.log('array', array, newArray, newArray2);

const indexName = nomes.findIndex(item => item === 'José');
const nameFinde = nomes[indexName];

nomes.push('Wacelys');
const lastName = nomes.pop();
const firstName = nomes.shift();
const newName = nomes.unshift(lastName);

console.log('indexName', lastName, firstName, newName);
console.log('nomes', nomes);

const newArray3 = nomes.map(item => item.toLowerCase());
console.log('nomes', nomes.forEach(item => console.log(item)));

console.log('newArray3', newArray3);

const newArrayNome =  ['Wacelys', 'Silva', 'Santos'];
const newArray4 = nomes.concat(newArrayNome);
const newArray5 = [...nomes, ...newArrayNome];

console.log('newArray4', newArray4.length);

