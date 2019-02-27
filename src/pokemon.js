// Return "Pokemon" class

function createPokemon() {
  let allPokemons = []

  return class {
    constructor(pokemonObj) {
      this.id = pokemonObj.id
      this.nickname = pokemonObj.nickname
      this.species = pokemonObj.species
      this.trainer_id = pokemonObj.trainer_id
      allPokemons.push(this)
    }

    // Class methods

    static all() {
      return allPokemons
    }

    // Instance methods


    // Helper methods

  }
}

const Pokemon = createPokemon()
