function createCardsFilms(film) {
    const {title, year, rate, duration, genre, synopsis, poster, trailer} = film

    const card = document.createElement('div')
    card.classList.add('card')
    
    const imgCard = document.createElement('div')
    imgCard.classList.add('card-image','waves-effect','waves-block','waves-light')
    const image = document.createElement('img')
    image.src = poster
    image.classList.add('activator')
    imgCard.appendChild(image)

    const cardContent = document.createElement('div')
    cardContent.classList.add('card-content')
    const cardTitle = document.createElement('span')
    cardTitle.classList.add('card-title','activator','grey-text','text-darken-4')
    cardTitle.textContent = title
    cardContent.appendChild(cardTitle)

    const cardReveal = document.createElement('div')
    cardReveal.classList.add('card-reveal')
    const closeIcon = document.createElement('i')
    closeIcon.classList.add('material-icons')
    closeIcon.textContent = 'close'
    const cardRevealTitle = document.createElement('span')
    cardRevealTitle.classList.add('card-title','grey-text','text-darken-4')
    cardRevealTitle.textContent = title
    const cardRevealTitleContainer = document.createElement('div')
    cardRevealTitleContainer.classList.add('titleContainer')
    cardRevealTitleContainer.appendChild(cardRevealTitle)
    const cardRevealDetailContainer = document.createElement('div')
    cardRevealDetailContainer.classList.add('detailContainer')
    const headlines = document.createElement('h4')
    const hlYear = document.createElement('span')
    hlYear.classList.add('year')
    hlYear.textContent = year
    const hlRate = document.createElement('span')
    hlRate.classList.add('rate')
    hlRate.innerHTML = `<i class="fa fa-star" aria-hidden="true"></i>${rate}`
    const hlDuration = document.createElement('span')
    hlDuration.textContent = duration
    headlines.appendChild(hlYear)
    headlines.appendChild(hlRate)
    headlines.appendChild(hlDuration)
    const hlGenre = document.createElement('h4')
    hlGenre.classList.add('genre')
    const genreTags = document.createElement('span')
    genreTags.classList.add('genreTags')
    let genreList = ''
    for (let index = 0; index < genre.length; index++) {
      genreList += genre[index];
      if (index !== genre.length - 1) {
        genreList += ' - '
      }
    }
    genreTags.textContent = genreList
    hlGenre.appendChild(genreTags)
    const synop = document.createElement('p')
    synop.classList.add('grey-text','text-darken-3')
    synop.textContent = synopsis
    const play = document.createElement('a')
    play.classList.add('playTrailerBtn')
    const playContent = document.createElement('div')
    play.appendChild(playContent)
    play.innerHTML = `<i class="fa fa-play-circle-o" aria-hidden="true"></i> Watch Trailer`
    play.dataset.trailer = trailer
    cardRevealDetailContainer.appendChild(headlines)
    cardRevealDetailContainer.appendChild(hlGenre)
    cardRevealDetailContainer.appendChild(synop)
    cardRevealDetailContainer.appendChild(play)
    cardReveal.appendChild(closeIcon)
    cardReveal.appendChild(cardRevealTitleContainer)
    cardReveal.appendChild(cardRevealDetailContainer)

    
    card.appendChild(imgCard)
    card.appendChild(cardContent)
    card.appendChild(cardReveal)

    card.addEventListener('mouseleave', () => {
      card.style = 'overflow: visible'
      cardReveal.style = 'display: none; transform: translateY'
    })

    return card

}

module.exports = createCardsFilms