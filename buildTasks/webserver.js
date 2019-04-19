import connect from 'gulp-connect';

export function startWebserver(cb) {
    return connect.server({
        root: './_site',
      });
}