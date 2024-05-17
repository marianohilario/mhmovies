function pageIndicators(data) {
    let cantFilms = 4
    if (window.screen.width <= 576) {
         cantFilms = data.length
    } else if (window.screen.width <= 990) {
         cantFilms = 2
    } else if (window.screen.width <= 1150) {
        cantFilms = 3
   }
    const numPages = Math.ceil(data.length / cantFilms)

    for (let index = 0; index < numPages; index++) {
        const indicator = document.createElement('button')
        if (index === 0) {
            indicator.classList.add('active')
        }
        indicator.addEventListener('click', (e) => {
            const row = document.querySelector('.slider-container')
            row.scrollLeft = index * row.offsetWidth
            document.querySelector('.indicators .active').classList.remove('active')
            e.target.classList.add('active')
        })

        document.querySelector('.indicators').appendChild(indicator)
    }
}

module.exports = pageIndicators