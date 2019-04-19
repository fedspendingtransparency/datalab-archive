var gulp = require('gulp'),
    changed = require('gulp-changed'),
    Liquid = require('liquid'),
    engine = new Liquid.Engine(),
    eventStream = require('event-stream'),
    frontmatter = require('gulp-front-matter'),
    fs = require('fs');

engine.registerFileSystem(new Liquid.LocalFileSystem('./_includes'));

function buildHtml() {
    return gulp.src('./entries/**/*.html')
        // .pipe(changed('./entries/test.html', {
        //     extension: '.html'
        // }))
        .pipe(frontmatter({
            property: 'meta',
            remove: true
        }))
        .pipe(eventStream.map(function (file, cb) {
            var templateLocation = (file.meta.layout) ? './_layouts/' + file.meta.layout + '.html' : './_layouts/default.html',
                template = String(fs.readFileSync(templateLocation));

            engine.parseAndRender(template, {
                page: file.meta,
                content: String(file.contents)
            }).then(function (result) {
                engine.parseAndRender(result, file.meta).then(function (final) {
                    console.log('built page:', file.meta.title || "no title");
                    file.contents = Buffer.from(final);
                    cb(null, file)
                }, function(reason) {
                    console.log('rejected parse:', file.meta.title)
                    console.log('reason', reason)
                    cb(null, file)
                })
            }, function(){
                console.log('template no bueno')
            })
        }))
        .pipe(gulp.dest('./_site/'))
}

export default buildHtml;
