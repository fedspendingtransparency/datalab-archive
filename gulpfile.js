var gulp = require('gulp');
const changed = require('gulp-changed');

var Liquid = require('liquid'),
    engine = new Liquid.Engine(),
    eventStream = require('event-stream'),
    frontmatter = require('gulp-front-matter'),
    fs = require('fs');
    engine.registerFileSystem(new Liquid.LocalFileSystem('./_includes'));

gulp.task('compile', function() {
    return gulp.src('./entries/test.html')
        // only compile pages that have changed
        .pipe(changed('./entries/test.html', {
            extension: '.html'
        }))
        // get the frontmatter, accessible via file.meta
        .pipe(frontmatter({
            property: 'meta',
            remove: true
        })).pipe(eventStream.map(function(file, cb) {
            // if layout is defined in the frontmatter, if not use default.html
            if (file.meta.layout) {
                var template = String(fs.readFileSync('./_layouts/' + file.meta.layout + '.html'))
            } else {
                var template = String(fs.readFileSync('./_layouts/default.html'))
            }

            console.log('t', template)

            // run the main layout through node-liquid putting frontmatter in 'page' namespace.
            var mainLayout = engine.parseAndRender(template, {
                page: file.meta,
                content: String(file.contents)
            }).then(function(result) {
                // compile page content with no namespace on the frontmatter
                var mainLayout = engine.parseAndRender(result, file.meta).then(function(final) {
                    file.contents = new Buffer(final)
                    cb(null, file)
                })
            })
        }))
        .pipe(gulp.dest('./_site/'))
  })