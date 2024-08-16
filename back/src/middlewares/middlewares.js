function validarDatosMovie(req, res, next) {
    const {title, year, director, duration, genre, rate, poster, imgTitle, background, trailer, synopsis} = req.body
    if (!title || !year || !director || !duration || !genre || !rate || !poster || !imgTitle || !background || !trailer || !synopsis) {
        return res.status(400).json({
            error: 'Todos los campos deben estar completos.'
        })
    } else if (typeof year !== 'number' || typeof rate !== 'number') {
        return res.status(400).json({
            error: 'Los campos Año y Rate deben ser número.'
        })
    } else if (year.toString().length !== 4) {
        return res.status(400).json({
            error: 'El año debe ser un número de 4 dígitos.'
        })
    } else if (rate < 1 || rate > 10) {
        return res.status(400).json({
            error: 'El rate debe ser un número entre 1 y 10.'
        })
    } else {
        next()
    }

}

module.exports = validarDatosMovie