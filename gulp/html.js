const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('./config');

gulp.task('html', html);

function html () {
    const target = gulp.src(config.html.src);
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    return target
    .pipe(gulp.dest('./public'))
    .pipe($.livereload());
}