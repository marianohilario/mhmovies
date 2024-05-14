const pageIndicators = require('./pageIndicators.js')
const url = require('../utils/constants.js')
const renderFilms = require('./renderFilms.js')

$.get(url, (data, status) => {
  renderFilms(data)
  pageIndicators(data)
})


const arrowsCarousel = require('./arrowsCarousel.js')
arrowsCarousel()
// const row = document.querySelector('.slider-container')
// const leftArrow = document.querySelector('.left-arrow')
// const rightArrow = document.querySelector('.right-arrow')

// rightArrow.addEventListener('click', () => {
//   row.scrollLeft += row.offsetWidth;
//   console.log(row.offsetWidth);
//   const activeIndicator = document.querySelector('.indicators .active')
//   if (activeIndicator.nextSibling) {
//     activeIndicator.nextSibling.classList.add('active')
//     activeIndicator.classList.remove('active')
//   }
// })

// leftArrow.addEventListener('click', () => {
//   row.scrollLeft -= row.offsetWidth
//   const activeIndicator = document.querySelector('.indicators .active')
//   if (activeIndicator.previousSibling) {
//     activeIndicator.previousSibling.classList.add('active')
//     activeIndicator.classList.remove('active')
//   }
// })