function createCarouselItem(film) {
    const {title, imgTitle, year, rate, duration, genre, synopsis, poster, background, trailer} = film

	const carouselItem = document.createElement('div')
	carouselItem.classList.add('carousel-item')

	const carouselImg = document.createElement('img')
	carouselImg.classList.add('carousel-item-img')
	carouselImg.src = poster
	carouselImg.alt = title + ' poster'
	carouselImg.dataset.title = imgTitle
	carouselImg.dataset.year = year
	carouselImg.dataset.rate = rate
	carouselImg.dataset.duration = duration
	let genreList = ''
    for (let index = 0; index < genre.length; index++) {
      genreList += genre[index];
      if (index !== genre.length - 1) {
        genreList += ' - '
      }
    }
	carouselImg.dataset.genre = genreList
	carouselImg.dataset.synopsis = synopsis
	carouselImg.dataset.bg = background
	carouselImg.dataset.trailer = trailer

	carouselItem.appendChild(carouselImg)
	
	return carouselItem
}

module.exports = createCarouselItem