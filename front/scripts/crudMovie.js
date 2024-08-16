function crudCard(film) {
    const {_id, title, director, year, rate, duration, genre, synopsis, poster, trailer, background, imgTitle} = film

    const crudCard = document.createElement('div')
    crudCard.classList.add('card','mb-5')
    
    const crudCardRow = document.createElement('div')
    crudCardRow.classList.add('row','g-0','h-100')
    
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('col-md-4')
    const image = document.createElement('img')
    image.classList.add('img-fluid','rounded-start')
    image.src = poster
    
    const dataContainer = document.createElement('div')
    dataContainer.classList.add('col-md-8')
    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body','h-100','d-flex','flex-column','justify-content-between')
    const dataSubContainer = document.createElement('div')
    const cardTitle = document.createElement('h5')
    cardTitle.classList.add('card-title','fs-4','border-bottom')
    cardTitle.textContent = title
    const headlines = document.createElement('h4')
    const hlYear = document.createElement('span')
    hlYear.classList.add('year')
    hlYear.textContent = year
    const hlRate = document.createElement('span')
    hlRate.classList.add('rate')
    hlRate.innerHTML = `<i class="fa fa-star" aria-hidden="true"></i>${rate}`
    const hlDuration = document.createElement('span')
    hlDuration.classList.add('duration')
    hlDuration.textContent = duration
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
    const synop = document.createElement('p')
    synop.classList.add('synopsis')
    synop.textContent = synopsis.length >100 ? synopsis.slice(0,101) + ' ...' : synopsis

    const cardButtons = document.createElement('div')
    cardButtons.classList.add('cardButtons','text-end')
    const editLink = document.createElement('a')
    editLink.href = '#mainForm'
    editLink.classList.add('d-inline')
    const editBtn = document.createElement('i')
    editBtn.classList.add('bi','bi-pencil-square','btn','btn-success','z-n1')
    editBtn.dataset.id = _id
    editBtn.dataset.title = title
    editBtn.dataset.director = director
    editBtn.dataset.year = year
    editBtn.dataset.duration = duration
    editBtn.dataset.poster = poster
    editBtn.dataset.background = background
    editBtn.dataset.trailer = trailer
    editBtn.dataset.imgTitle = imgTitle
    editBtn.dataset.synopsis = synopsis
    editBtn.dataset.genre = genre
    editBtn.dataset.rate = rate
    editBtn.id = 'edit'
    editLink.appendChild(editBtn)

    const deleteBtn = document.createElement('i')
    deleteBtn.classList.add('bi','bi-trash3-fill','btn','btn-danger')
    deleteBtn.dataset.id = _id
    deleteBtn.id = 'delete'
    
    
    crudCard.appendChild(crudCardRow)
    imgContainer.appendChild(image)
    crudCardRow.appendChild(imgContainer)
    crudCardRow.appendChild(dataContainer)
    dataContainer.appendChild(cardBody)
    cardBody.appendChild(dataSubContainer)
    dataSubContainer.appendChild(cardTitle)
    dataSubContainer.appendChild(headlines)
    headlines.appendChild(hlYear)
    headlines.appendChild(hlRate)
    headlines.appendChild(hlDuration)
    dataSubContainer.appendChild(hlGenre)
    hlGenre.appendChild(genreTags)
    dataSubContainer.appendChild(synop)
    cardBody.appendChild(cardButtons)
    cardButtons.appendChild(editLink)
    cardButtons.appendChild(deleteBtn)




    return crudCard
}

module.exports = crudCard