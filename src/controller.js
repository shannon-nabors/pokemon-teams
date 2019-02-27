// Retrieve page elements
function main() {
  return document.querySelector('main')
}

// Primary functions
function createTrainers(data) {
  for (const key in data) {
    new Trainer(data[key])
  }
  Trainer.displayAll()
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
