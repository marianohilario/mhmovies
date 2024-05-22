function showSearchInput() {
    const searchbutton = document.getElementById('search')
    const searchInput = document.getElementById('searchInput')

    searchbutton.addEventListener('click', (e) => {
        e.preventDefault()
        searchInput.classList.toggle('active')
    })
}

module.exports = showSearchInput