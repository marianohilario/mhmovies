const createCardsFilms = require("./createCardFilm")

function renderCardsFilms(data) {
    const container = document.querySelector('.movies-container')
  
    const arrFilms = data.map(film => {
        return createCardsFilms(film)
    })
    arrFilms.forEach(item => {
      container.appendChild(item)
    })
}

module.exports = renderCardsFilms