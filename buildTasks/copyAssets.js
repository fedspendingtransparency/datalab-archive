import gulp from 'gulp';

function copy() {
    return gulp.src(['./assets/**/*'])
        .pipe(gulp.dest('./_site/assets/'));
}

export default copy;
