import connect from 'gulp-connect';
import gulp from 'gulp';

function reload(cb) {
  gulp.src('./app/*.html')
    .pipe(gulp.dest('./app'))
    .pipe(connect.reload());
}

function livereload(cb) {
  gulp.src('./_site/**/*.*')
    .pipe(gulp.dest('./app'))
    .pipe(connect.reload());

    cb();
}

export function startWebserver(cb) {
  gulp.watch('./_site/**/*.*', livereload)

  return connect.server({
    root: './_site',
    livereload: true
  });
}