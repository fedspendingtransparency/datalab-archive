import gulp from 'gulp';

function copyAssets() {
    return gulp.src(['./assets/**/*'])
        .pipe(gulp.dest('./_site/assets/'));
}

function copyCss() {
    return gulp.src(['./css/**/*'])
        .pipe(gulp.dest('./_site/css/'));
}

function copyData() {
    return gulp.src(['./data-lab-data/**/*'])
        .pipe(gulp.dest('./_site/data-lab-data/'));
}

function copyImages() {
    return gulp.src(['./images/**/*'])
        .pipe(gulp.dest('./_site/images/'));
}

function copyJs() {
    return gulp.src(['./js/**/*'])
        .pipe(gulp.dest('./_site/js/'));
}

exports.default = gulp.parallel(
    copyAssets,
    copyCss,
    copyData,
    copyImages,
    copyJs
)
