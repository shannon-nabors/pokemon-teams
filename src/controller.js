// Retrieve page elements
function main() {
  return document.querySelector('main')
}

function list(id) {
  return document.querySelector(`#trainer-list-${id}`)
}

function listItem(id){
  return document.querySelector(`#pokemon-list-${id}`)
}


// Primary functions
function createTrainers(data) {
  for (const key in data) {
    new Trainer(data[key])
  }
  Trainer.displayAll()
}

function addNewPokemon(data) {
  let l = list(data.trainer_id)
  let p = new Pokemon(data)
  p.addToList(l)
}


// Event listeners

function handleButtons(e) {
  if (e.target && e.target.nodeName === "BUTTON") {
    if (e.target.className === "release") {
      handleReleaseButton(e.target.id.slice(16))
    } else {
      handleAddButton(e.target.id.slice(15))
    }
  }
}

// Helper methods

function handleReleaseButton(pokeID) {
  let pokemon = Pokemon.all().find(p => p.id == pokeID)
  pokemon.release()
}

function handleAddButton(trainerID) {
  if (list(trainerID).childElementCount < 6) {
    getNewPokemon(trainerID)
  } else {
    alert("A trainer may have a maximum of 6 pokemons. Please delete one before adding.")
  }
}
