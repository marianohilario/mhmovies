function createCardsFilms(film) {
    const {title, year, rate, duration, genre, synopsis, poster, trailer} = film

    const card = document.createElement('div')
    card.classList.add('card')
    
    const image = document.createElement('img')
    image.src = poster

    const cardContent = document.createElement('div')
    cardContent.classList.add('card-content')
    const cardTitle = document.createElement('span')
    cardTitle.classList.add('card-title','grey-text','text-darken-4')
    cardTitle.textContent = title
    cardContent.appendChild(cardTitle)

    const cardReveals = document.createElement('div')
    cardReveals.classList.add('card-reveals')
    const cardRevealsTitle = document.createElement('span')
    cardRevealsTitle.classList.add('card-title','black-text','text-darken-4')
    cardRevealsTitle.textContent = title
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
    cardReveals.appendChild(cardRevealsTitle)
    cardReveals.appendChild(headlines)
    cardReveals.appendChild(hlGenre)
    cardReveals.appendChild(synop)
    cardReveals.appendChild(play)

    
    card.appendChild(image)
    card.appendChild(cardContent)
    card.appendChild(cardReveals)

    return card

}

module.exports = createCardsFilms