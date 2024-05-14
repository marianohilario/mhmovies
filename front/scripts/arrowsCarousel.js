function arrowsCarousel() {
    const row = document.querySelector('.slider-container')
    const leftArrow = document.querySelector('.left-arrow')
    const rightArrow = document.querySelector('.right-arrow')

    rightArrow.addEventListener('click', () => {
    row.scrollLeft += row.offsetWidth;
    const activeIndicator = document.querySelector('.indicators .active')
    if (activeIndicator.nextSibling) {
        activeIndicator.nextSibling.classList.add('active')
        activeIndicator.classList.remove('active')
    }
    })

    leftArrow.addEventListener('click', () => {
    row.scrollLeft -= row.offsetWidth
    const activeIndicator = document.querySelector('.indicators .active')
    if (activeIndicator.previousSibling) {
        activeIndicator.previousSibling.classList.add('active')
        activeIndicator.classList.remove('active')
    }
    })
}

module.exports = arrowsCarousel