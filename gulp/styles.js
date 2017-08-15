const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('./config');

gulp.task('dev:styles', devStyles);
gulp.task('prod:styles', prodStyles);

function devStyles () {
    return gulp
        .src(config.styles.src)
        .pipe($.sourcemaps.init())
        .pipe($.sass())
        .pipe($.autoprefixer({
            browsers: config.styles.autoprefix
        }))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(config.styles.dest))
        .pipe($.livereload());
}

function prodStyles () {
    return gulp
        .src(config.styles.src)
        .pipe($.sass())
        .pipe($.autoprefixer({
            browsers: config.styles.autoprefix
        }))
        .pipe($.minifyCss())
        .pipe(gulp.dest(config.styles.dest));
}
