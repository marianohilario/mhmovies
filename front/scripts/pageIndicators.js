function pageIndicators(data) {
    const numPages = Math.ceil(data.length / 6)

    for (let index = 0; index < numPages; index++) {
        const indicator = document.createElement('button')
        if (index === 0) {
            indicator.classList.add('active')
        }
        indicator.addEventListener('click', (e) => {
            row.scrollLeft = index * row.offsetWidth
            document.querySelector('.indicators .active').classList.remove('active')
            e.target.classList.add('active')
        })

        document.querySelector('.indicators').appendChild(indicator)
    }
}

module.exports = pageIndicators