// Retrieve page elements
function main() {
  return document.querySelector('main')
}

function list(id) {
  return document.querySelector(`#trainer-list-${id}`)
}

// Primary functions
function createTrainers(data) {
  for (const key in data) {
    new Trainer(data[key])
  }
  Trainer.displayAll()
}

function addNewPokemon(data) {
  let p = new Pokemon(data)
  let l = list(data.trainer_id)
  p.addToList(l)
}

// Event listeners

function handleButtons(e) {
  if (e.target && e.target.nodeName === "BUTTON") {
    if (e.target.className === "release") {
      console.log('clicked release')
    } else {
      let trainerID = e.target.id.slice(15)
      getNewPokemon(trainerID)
    }
  }
}

// Helper methods
