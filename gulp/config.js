module.exports = {
    styles: {
        src: './src/styles/main.scss',
        srcWatch: './src/styles/**/*.scss',
        dest: './public/styles',
        autoprefix: ['last 3 versions']

    },
    scripts : {
        src: './src/scripts/**/*.js',
        dest: './public/scripts'
    },
    html: {
        src: './src/index.html',
        dest: './public'
    },
    vendor : {
        src: './src/vender/**/*.js',
        dest: './public/vender'
    },
    seed : {
        src: './src/data.json',
        dest: './public'
    },
    partials : {
        src: './src/partials/**/*.html',
        dest: './public/partials'
    }
}