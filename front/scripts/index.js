const url = require('../utils/constants.js')
const domManipulation = require('./DOMManipulation.js')
const renderCardsFilms = require('./renderCardsFilms.js')
const renderCarouselFilms = require('./renderFilms.js')
const axios = require('axios')

const fetchData = async () => {
  try {
    const {data} = await axios.get(url)
    renderCardsFilms(data)
    const dataCarousel = data.length > 5 ? data.sort((a,b)=>b.rate-a.rate).slice(0,5) : data.sort((a,b)=>b.rate-a.rate)
    renderCarouselFilms(dataCarousel)
    domManipulation()
  } catch (error) {
    console.log(error.message);
  }
}

fetchData()
