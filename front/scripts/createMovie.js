const form = document.getElementById("form");
const btnClear = document.getElementById("btnClear");
const btnSave = document.getElementById("btnSave");
const alerts = {
    clear: document.getElementById("clearAlert"),
    save: document.getElementById("saveAlert")
};
const axios = require("axios");
const url = require("../utils/constants.js");

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
    rate: document.getElementById("rate")
};

const clearForm = () => {
    Object.values(inputElements).forEach(input => {
        if (input.type === "select-multiple") {
            for (let option of input.options) {
                option.selected = false;
            }
        } else {
            input.value = "";
        }
    });
    form.classList.remove("was-validated");
};

const showAlert = (alertElement) => {
    alertElement.classList.add("active");
    setTimeout(() => alertElement.classList.remove("active"), 3000);
};

const getSelectedGenres = (genreElement) => {
    return Array.from(genreElement.selectedOptions).map(option => option.value);
};

const getMovieData = () => {
    return {
        title: inputElements.title.value,
        director: inputElements.director.value,
        year: parseInt(inputElements.year.value),
        duration: inputElements.duration.value,
        poster: inputElements.poster.value,
        background: inputElements.background.value,
        trailer: inputElements.trailer.value,
        imgTitle: inputElements.imgTitle.value,
        synopsis: inputElements.synopsis.value,
        genre: getSelectedGenres(inputElements.genre),
        rate: parseFloat(inputElements.rate.value)
    };
};

const isValidData = (data) => {
    return Object.values(data).every(value => value !== "" && value !== null && value !== undefined && (Array.isArray(value) ? value.length > 0 : true));
};

const postMovie = async (movieData) => {
    try {
        const newMovie = await axios.post(url, movieData);
        return newMovie;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
};

btnClear.addEventListener("click", (e) => {
    e.preventDefault();
    clearForm();
    showAlert(alerts.clear);
});

btnSave.addEventListener("click", async (e) => {
    e.preventDefault();
    const movieData = getMovieData();
    form.classList.add("was-validated");

    if (isValidData(movieData)) {
        try {
            await postMovie(movieData);
            clearForm();
            showAlert(alerts.save);
        } catch (error) {
            console.log("Error saving movie:", error.message);
        }
        form.classList.remove("was-validated");
    } else {
        console.log("Form data is invalid.");
    }
});
