const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('./config');

gulp.task('vendor', vendor);

function vendor () {
    return gulp
        .src('./src/vendor/**/*.*')
        .pipe(gulp.dest('./public/vendor'))
}