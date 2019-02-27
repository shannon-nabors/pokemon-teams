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

// Helper methods
