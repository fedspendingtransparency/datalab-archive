import gulp from 'gulp';
import requireDir from 'require-dir';

const tasks = requireDir('./buildTasks');

exports.build = gulp.series(
    tasks.emptyFiles.default,
    tasks.copyFiles.default,
    gulp.parallel(
        tasks.buildHtml.default,
        tasks.compileSass.default,
        tasks.processJs.default
    )
);

exports.startWebserver = gulp.series(
    tasks.webserver.startWebserver
)