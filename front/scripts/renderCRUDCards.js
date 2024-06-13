const crudCard = require('./crudMovie.js')

function renderCrudCards(data) {
  const container = document.querySelector('.listMovies')
  
    const arrFilms = data.map(film => {
      return crudCard(film)
    })
    arrFilms.forEach(item => {
      container.appendChild(item)
    })
}

module.exports = renderCrudCards