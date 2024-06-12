module.exports = {
    entry: {
        index: './scripts/index.js',
        create: './scripts/createMovie.js'},
    output: {
        path: __dirname + '/public',
        filename: '[name].js'
    }
}