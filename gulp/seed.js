const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('./config');

gulp.task('seed', seed);

function seed () {
    return gulp
        .src(config.seed.src)
        .pipe(gulp.dest('./public'));
}