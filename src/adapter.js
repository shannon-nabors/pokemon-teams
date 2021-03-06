// Get all trainers
function getTrainers() {
  fetch('http://localhost:3000/trainers')
  .then(res => res.json())
  .then(trainerData => createTrainers(trainerData))
}

// Post a pokemon
function getNewPokemon(trainerID) {
  fetch('http://localhost:3000/pokemons', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({trainer_id: `${trainerID}`})
  }).then(res => res.json())
  .then(json => addNewPokemon(json))
}

// Delete a pokemon
function releasePokemon(pokemon) {
  fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
    method: 'DELETE'
  }).then(res => res.json())
  .then(json => console.log(json))
}
