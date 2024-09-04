const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');

function compileSass() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/styles/'));
}

function compressImages() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

function compressJS() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./dist/scripts'))
}

exports.default = gulp.parallel(compileSass, compressImages, compressJS);
exports.build = function () {
    gulp.watch('./src/styles/*.scss', { ignoreInitial: false }, gulp.series(compileSass));
    gulp.watch('./src/images/**/*', { ignoreInitial: false }, gulp.series(compressImages));
    gulp.watch('./src/scripts/*.js', { ignoreInitial: false }, gulp.series(compressJS));
};