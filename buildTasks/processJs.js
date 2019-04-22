import gulp from 'gulp';
import babel from 'gulp-babel';
import frontmatter from 'gulp-front-matter';
import gulpIf from 'gulp-if';

function hasIndicator(file) {
    let flag = file.contents.toString().substring(0,3);

    return flag === '---';
}

function hasFrontMatter(file) {
    return file.frontMatter;
}

function processJs() {
    return gulp.src(['./dl-js/**/*.js'])
        .pipe(gulpIf(hasIndicator, frontmatter({
            property: 'frontMatter',
            remove: true
        })))
        .pipe(gulpIf(hasFrontMatter, babel({
            presets: ['@babel/preset-env']
        })))
        .pipe(gulp.dest('./_site/assets/js'))
}

export default processJs;
