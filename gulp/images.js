const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('./config');
 
gulp.task('image', () =>
    gulp.src('src/images/**/*')
        .pipe($.imagemin())
        .pipe(gulp.dest('public/images'))
);