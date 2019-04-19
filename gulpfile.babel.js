import gulp from 'gulp';
import requireDir from 'require-dir';

const tasks = requireDir('./buildTasks'),
    { parallel, series } = gulp;

exports.default = series(
    tasks.emptyFiles.default,
    tasks.copyAssets.default,
    parallel(
        tasks.buildHtml.default
    )
);