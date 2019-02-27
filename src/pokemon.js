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

    addToList(list) {
      let li = document.createElement('li')
      let button = document.createElement('button')

      button.innerText = "Release"
      button.className = "release"
      button.id = `release-pokemon-${this.id}`

      li.innerText = `${this.nickname} (${this.species})`
      li.appendChild(button)
      list.appendChild(li)
    }

    // Helper methods

  }
}

const Pokemon = createPokemon()
