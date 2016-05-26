var gulp       = require('gulp'),
    source     = require('vinyl-source-stream'),
    babelify = require('babelify'),
    browserify = require('browserify');

gulp.task('browserify', function () {
  browserify('./js/main.js')
    .transform(babelify, {
        presets: ['es2015', 'react']
    }).bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./js/'));
});