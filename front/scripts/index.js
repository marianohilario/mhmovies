const pageIndicators = require('./pageIndicators.js')
const url = require('../utils/constants.js')
const renderFilms = require('./renderFilms.js')
const showSearchInput = require('./showSearchInput.js')
const navbarChangeBgColor = require('./navbarChangeBgColor.js')

$.get(url, (data, status) => {
  console.log(data);
  renderFilms(data)
  pageIndicators(data)
})

const arrowsCarousel = require('./arrowsCarousel.js')
arrowsCarousel()

showSearchInput()

window.onscroll = () => navbarChangeBgColor()