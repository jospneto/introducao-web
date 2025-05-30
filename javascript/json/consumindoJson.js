//Exemplo fetch
const handleGetPokemon = async () => {
  const URL_POKEMON = "https://pokeapi.co/api/v2";

  const buscaPokemon = document.getElementById("buscar-pokemon");
  const valor = buscaPokemon.value;

  //Requisição para API do Pokemon
  const request = (await fetch(`${URL_POKEMON}/pokemon/${valor}`));

  //Se a request der ok ele entra no if e exibe o pokemon
  if (request.ok) {
    //HTML
    const response = await request.json();
    const pokemonName = response.name;
    const sprites = response.sprites;
    const exibirPokemon = document.getElementById("exibir-pokemon");
    exibirPokemon.innerHTML = `<span class="pokemon-nome">${pokemonName}</span>`;
    exibirPokemon.innerHTML = `<img class="pokemon-exibido" src=${sprites.front_default} alt=${pokemonName} width="200" height="200" />`;
  } else {
    //Se não exibe uma mensagem dizendo que o pokemon não foi encontrado
    const exibirPokemon = document.getElementById("exibir-pokemon");
    exibirPokemon.innerHTML = `<span class="pokemon-nome">Pokémon não encontrado</span>`;
  }
}