const log = document.querySelector('#log')
const input = document.querySelector('#input .input')
//console.log(input)

window.addEventListener('keypress', (e) => {
  //console.log(e.shiftKey)
  if(e.key === 'Enter' && !e.shiftKey) {
    console.log(input.value)
    e.preventDefault()
    const entry = document.createElement('div')
    entry.classList.add('log-entry')
    const timestamp = new Date().toLocaleString()
    entry.innerHTML = `<small>${timestamp}</small> <span class="entry-text">${input.value}</span>`
    log.prepend(entry)
    input.value = ''
  }
})