module.exports = {
    plugins: [
        require('autoprefixer'),
        require('css-mqpacker'),
        require('cssnano')({
            preset:[
            'default', {
                // удаление коментариев
                removeAll: true,
            }
        ]
        })
    ]
}