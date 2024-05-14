const createItemCard = require('./createItemCard')

function renderFilms(data) {
    const container = document.querySelector('.slider')
    container.innerHTML = ''
  
    const arrFilms = data.map(film => {
      return createItemCard(film)
    })
    arrFilms.forEach(item => {
      container.appendChild(item)
    })
}

module.exports = renderFilms