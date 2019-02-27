// Get all trainers
function getTrainers() {
  fetch('http://localhost:3000/trainers')
  .then(res => res.json())
  .then(trainerData => console.log(trainerData))
}

// Post a pokemon


// Delete a pokemon
