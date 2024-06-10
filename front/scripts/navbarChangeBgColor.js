function navbarChangeBgColor() {
    window.scrollY > 50
        ? document.querySelector('header').classList.add('scrolled')
        : document.querySelector('header').classList.remove('scrolled')
}

window.addEventListener('scroll', navbarChangeBgColor)