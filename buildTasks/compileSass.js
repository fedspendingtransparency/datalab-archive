import gulp from 'gulp';
import sass from 'gulp-sass';

sass.compiler = require('node-sass');

function compileSass() {
    return gulp.src('./_sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./_site'));
}

export default compileSass;