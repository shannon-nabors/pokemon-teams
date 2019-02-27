// Return "Trainer" class

function createTrainer() {
  let allTrainers = []

  return class {
    constructor(trainerObj) {
      this.id = trainerObj.id
      this.name = trainerObj.name
      this.pokemons = trainerObj.pokemons
      allTrainers.push(this)

      this.pokemons.forEach(p => new Pokemon(p))
    }

    // Class methods

    static all() {
      return allTrainers
    }

    static displayAll() {
      this.all().forEach(trainer => trainer.display())
    }

    // Instance methods

    display() {
      let card = document.createElement('div')
      card.className = 'card'

      let p = document.createElement('p')
      p.innerText = this.name

      let button = document.createElement('button')
      button.innerText = "Add Pokemon"
      button.id = `trainer-${this.id}-button`

      card.appendChild(p)
      card.appendChild(button)

      // let list = document.createElement('ul')
      this.initiateList(card)

      // card.appendChild(list)
      main().appendChild(card)
    }

    // Helper methods

    initiateList(trainerCard) {
      let list = document.createElement('ul')
      this.pokemons.forEach( p => {
        let pokemon = Pokemon.all().find(poke => poke.id == p.id)
        pokemon.addToList(list)
      })
      trainerCard.appendChild(list)
    }
  }
}

const Trainer = createTrainer()
