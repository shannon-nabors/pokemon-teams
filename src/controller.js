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
  if (l.childElementCount < 6) {
    let p = new Pokemon(data)
    p.addToList(l)
  } else {
    alert("A trainer may have a maximum of 6 pokemons. Please delete one before adding.")
  }
}


// Event listeners

function handleButtons(e) {
  if (e.target && e.target.nodeName === "BUTTON") {
    if (e.target.className === "release") {
      let pokemon = Pokemon.all().find(p => p.id == e.target.id.slice(16))
      pokemon.release()
    } else {
      let trainerID = e.target.id.slice(15)
      getNewPokemon(trainerID)
    }
  }
}
