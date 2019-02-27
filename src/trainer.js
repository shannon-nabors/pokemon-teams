// Return "Trainer" class

function createTrainer() {
  let allTrainers = []

  return class {
    constructor(trainerObj) {
      this.id = trainerObj.id
      this.name = trainerObj.name
      this.pokemons = trainerObj.pokemons
    }

    // Class methods

    static all() {
      return allTrainers
    }

    // Instance methods


    // Helper methods

  }
}

const Trainer = createTrainer()
