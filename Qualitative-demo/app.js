let closeIcon = document.querySelector('.close')
let paragraphContainer = document.querySelectorAll('.paragraph-container')

paragraphContainer.addEventListener('click', (event) => {
  target = event.target
  if(target.classList.contains('close')) {
    paragraphContainer.classList.add('none')
  }
})


