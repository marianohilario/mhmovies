const axios = require("axios")
const url = require("../utils/constants");
const inputElements = {
    title: document.getElementById("title"),
    director: document.getElementById("director"),
    year: document.getElementById("year"),
    duration: document.getElementById("duration"),
    poster: document.getElementById("poster"),
    background: document.getElementById("background"),
    trailer: document.getElementById("trailer"),
    imgTitle: document.getElementById("imgTitle"),
    synopsis: document.getElementById("synopsis"),
    genre: document.getElementById("genre"),
    rate: document.getElementById("rate"),
    save: document.getElementById("save"),
    update: document.getElementById("update"),
    clean: document.getElementById("clean"),
    cancel: document.getElementById("cancel")
};

function crudCardMovieManipulation () {
    const editBtn = document.querySelectorAll('#edit')
    const deleteBtn = document.querySelectorAll('#delete')
    
    deleteBtn.forEach((button) => {
        button.addEventListener('click', async () => {
            try {
                const movieToDelete = await axios.delete(url + `/${button.dataset.id}`)
                location.reload()
            } catch (error) {
                console.log(error.message);
            }
        })
    })

    editBtn.forEach((button) => {
        button.addEventListener('click', () => {
            inputElements.title.value = button.dataset.title
            inputElements.director.value = button.dataset.director
            inputElements.year.value = button.dataset.year
            inputElements.duration.value = button.dataset.duration
            inputElements.poster.value = button.dataset.poster
            inputElements.background.value = button.dataset.background
            inputElements.trailer.value = button.dataset.trailer
            inputElements.imgTitle.value = button.dataset.imgTitle
            inputElements.synopsis.value = button.dataset.synopsis
            const genreArr = button.dataset.genre.split(',')
            for (let i = 0; i < inputElements.genre.options.length; i++) {
                const option = inputElements.genre.options[i];
                if (genreArr.includes(option.value)) {
                    option.selected = true;
                }
            }
            inputElements.rate.value = button.dataset.rate
            const toggleClasses = (element, addClass, removeClass) => {
                element.classList.add(addClass);
                element.classList.remove(removeClass);
            };
            
            toggleClasses(inputElements.save, 'd-none', 'd-block');
            toggleClasses(inputElements.clean, 'd-none', 'd-block');
            toggleClasses(inputElements.update, 'd-block', 'd-none');
            toggleClasses(inputElements.cancel, 'd-block', 'd-none');
            
            inputElements.update.firstElementChild.dataset.id= button.dataset.id
        })
    })
}

module.exports = crudCardMovieManipulation