var gulp = require('gulp'),
    del = require('del');

function emptyFiles() {
    return del('./_site/**/*')
}

export default emptyFiles;
