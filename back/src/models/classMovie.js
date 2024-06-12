class Movie {
  constructor({ _id, title, year, director, duration, genre, rate, poster, imgTitle, background, trailer, synopsis}) {
    if (!title || !director || !poster) {
      throw Error(
        "Los argumentos title, director y poster son obligatorios"
      );
    }

    (this._id = _id),
    (this.title = title),
    (this.year = year),
    (this.director = director),
    (this.duration = duration),
    (this.genre = genre),
    (this.rate = rate),
    (this.poster = poster),
    (this.imgTitle = imgTitle),
    (this.background = background),
    (this.trailer = trailer),
    (this.synopsis = synopsis);
  }
}

module.exports = Movie