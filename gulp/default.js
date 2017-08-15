const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('./config');

require('./scripts.js');
require('./styles.js');
require('./vendor.js');
require('./html.js');
require('./seed.js');
require('./images.js');


gulp.task('dev', gulp.series(gulp.parallel('vendor', 'dev:scripts', 'dev:styles'), 'html'));
gulp.task('dev:watch', gulp.series('dev', devWatch));

gulp.task('prod', gulp.series(gulp.parallel('vendor', 'image', 'prod:scripts', 'prod:styles'), 'html'));

gulp.task('default', gulp.series('dev'));

function devWatch () {
    $.livereload.listen();
    gulp.watch(config.scripts.src, gulp.series('dev:scripts'));
    gulp.watch(config.styles.srcWatch, gulp.series('dev:styles'));
    gulp.watch(config.html.src, gulp.series('html'));
}