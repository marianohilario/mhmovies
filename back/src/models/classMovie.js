class Movie {
  constructor({ title, year, director, duration, genre, rate, poster }) {
    if (!title || !director || !poster) {
      throw Error(
        "Los argumentos title, director y poster son obligatorios"
      );
    }

    (this.title = title),
    (this.year = year),
    (this.director = director),
    (this.duration = duration),
    (this.genre = genre),
    (this.rate = rate),
    (this.poster = poster);
  }
}

module.exports = Movie