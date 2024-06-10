function domManipulation() {
    const carouselItemsImg = document.querySelectorAll(".carousel-item-img");
    const watchTrailer = document.querySelector(".play");
    const trailerBtn = document.querySelectorAll(".playTrailerBtn");
    const closeBtn = document.querySelector(".close");
    
    changeData(carouselItemsImg[0].dataset);
    
    carouselItemsImg.forEach((item) => {
        item.addEventListener("click", (e) => {
            const movieData = e.target.dataset;
            changeData(movieData);
        });
    });
    
    watchTrailer.addEventListener("click", (e) => {
        const trailerToView = e.target.dataset.trailer;
        toggleVideo(trailerToView);
    });
    trailerBtn.forEach(button => {
        button.addEventListener("click", (e) => {
            const trailerToView = e.target.dataset.trailer;
            toggleVideo(trailerToView);
        })
    })
    closeBtn.addEventListener("click", (e) => {
        const trailerToView = e.target.dataset.trailer;
        toggleVideo(trailerToView);
    });
    
    function toggleVideo(trailerToView) {
        const trailer = document.querySelector(".trailer");
        const iframe = document.querySelector("iframe");
        trailer.classList.toggle("active");
        trailer.classList.contains("active")
            ? (iframe.src =
                trailerToView + "&autoplay=1")
            : (iframe.src = "");
    }
    
    function changeData({title, year, rate, duration, genre, synopsis, bg, trailer}) {
        const banner = document.querySelector(".banner");
        const movTitle = document.querySelector(".movie-title");
        const movYear = document.querySelector(".year");
        const movRate = document.querySelector(".rate");
        const movDuration = document.querySelector(".duration");
        const movGenres = document.querySelector(".genreTags");
        const movSynopsis = document.querySelector(".synopsis");

        banner.style.background = `url('${bg}')`;
        banner.style.backgroundSize = "cover";
        banner.style.backgroundPosition = "center";
        
        movTitle.src = title

        movYear.textContent = year
        
        movRate.innerHTML = `<i class="fa fa-star" aria-hidden="true"></i> ${rate}`
        
        movDuration.textContent = duration
        
        movGenres.textContent = genre
        
        movSynopsis.textContent = synopsis

        watchTrailer.dataset.trailer = trailer;
    }

    const elem = document.querySelector(".carousel");
    const instance = M.Carousel.init(elem, {
        duration: 400,
    });
}

module.exports = domManipulation