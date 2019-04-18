import gulp from 'gulp';
import requireDir from 'require-dir';

const tasks = requireDir('./build');

const build = gulp.parallel(tasks.buildHtml.default)

gulp.task('default', build);