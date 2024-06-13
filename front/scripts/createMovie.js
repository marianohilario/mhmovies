const form = document.getElementById("form");
const btnClear = document.getElementById("btnClear");
const btnSave = document.getElementById("btnSave");
const btnUpdate = document.getElementById("btnUpdate");
const btnCancel = document.getElementById("btnCancel");
const alerts = {
    clear: document.getElementById("clearAlert"),
    save: document.getElementById("saveAlert"),
    update: document.getElementById("updateAlert")
};
const axios = require("axios");
const url = require("../utils/constants.js");
const renderCrudCards = require("./renderCRUDCards.js");
const crudCardMovieManipulation = require("./crudMovieManipulation.js");

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

const putMovie = async (movieData) => {
    try {
        const updateMovie = await axios.put(url + `/${btnUpdate.dataset.id}`, movieData);
        return updateMovie;
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

btnCancel.addEventListener("click", (e) => {
    e.preventDefault();
    clearForm();
    const toggleClasses = (element, addClass, removeClass) => {
        element.classList.add(addClass);
        element.classList.remove(removeClass);
    };

    toggleClasses(inputElements.save, 'd-block', 'd-none');
    toggleClasses(inputElements.clean, 'd-block', 'd-none');
    toggleClasses(inputElements.update, 'd-none', 'd-block');
    toggleClasses(inputElements.cancel, 'd-none', 'd-block');
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
            setTimeout(() => location.reload(), 3000);
        } catch (error) {
            console.log("Error updating movie:", error.message);
        }
        form.classList.remove("was-validated");
    } else {
        console.log("Form data is invalid.");
    }
});

btnUpdate.addEventListener("click", async (e) => {
    e.preventDefault();
    const movieData = getMovieData();
    form.classList.add("was-validated");

    if (isValidData(movieData)) {
        try {
            await putMovie(movieData);
            clearForm();
            showAlert(alerts.update);
            setTimeout(() => location.reload(), 3500);
        } catch (error) {
            console.log("Error saving movie:", error.message);
        }
        form.classList.remove("was-validated");
    } else {
        console.log("Form data is invalid.");
    }
});

const fetchData = async () => {
    try {
      const {data} = await axios.get(url)
      renderCrudCards(data)
      crudCardMovieManipulation()
    } catch (error) {
      console.log(error.message);
    }
  }
  
  fetchData()

  module.exports = {clearForm}