const gulp = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const watch = require('gulp-watch');
const connect = require('gulp-connect');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');

const buildFunction = function() {
    gulp.src('js/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(jshint('hint.jshintrc'))
        .pipe(jshint.reporter(stylish))
        .pipe(uglify())
        .pipe(concat('dist.js'))
        .pipe(gulp.dest('dist'))

};
gulp.task('default', buildFunction);
gulp.task('watch', function() {
    return watch('js/*js', buildFunction)
});

gulp.task('connect', function() {
    connect.server();
});




