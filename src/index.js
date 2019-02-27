// Event listener for page load with main functions inside
document.addEventListener("DOMContentLoaded", function() {
  getTrainers()
  main().addEventListener('click', handleButtons)
})
