// Return "Trainer" class

function createTrainer() {
  let allTrainers = []

  return class {
    constructor(trainerObj) {
      this.id = trainerObj.id
      this.name = trainerObj.name
      this.pokemons = trainerObj.pokemons
      allTrainers.push(this)
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

      let list = document.createElement('ul')
      list.innerText = "I'm a list"

      card.appendChild(p)
      card.appendChild(button)
      card.appendChild(list)
      main().appendChild(card)
    }

    // Helper methods

  }
}

const Trainer = createTrainer()
