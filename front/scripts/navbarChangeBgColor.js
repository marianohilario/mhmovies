function navbarChangeBgColor() {
    if (window.scrollY > 60) {
        document.getElementById('navbar').classList.add('bgDark')
    } else {
        document.getElementById('navbar').classList.remove('bgDark')
    }
}

module.exports = navbarChangeBgColor