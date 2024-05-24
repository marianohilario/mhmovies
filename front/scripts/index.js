const pageIndicators = require('./pageIndicators.js')
const url = require('../utils/constants.js')
const renderFilms = require('./renderFilms.js')
const showSearchInput = require('./showSearchInput.js')
const navbarChangeBgColor = require('./navbarChangeBgColor.js')
const axios = require('axios')

const fetchData = async () => {
  try {
    const data = await axios.get(url)
    renderFilms(data.data)
    pageIndicators(data.data)
  } catch (error) {
    console.log(error.message);
  }
}

fetchData()

const arrowsCarousel = require('./arrowsCarousel.js')
arrowsCarousel()

showSearchInput()

window.onscroll = () => navbarChangeBgColor()