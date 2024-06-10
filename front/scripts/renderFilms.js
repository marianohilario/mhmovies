const createCarouselItem = require('./createCarouselItem.js')

function renderCarouselFilms(data) {
  const container = document.querySelector('.carousel')
  
    const arrFilms = data.map(film => {
      return createCarouselItem(film)
    })
    arrFilms.forEach(item => {
      container.appendChild(item)
    })
}

module.exports = renderCarouselFilms