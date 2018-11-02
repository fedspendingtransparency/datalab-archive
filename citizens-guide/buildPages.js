
const fse = require('fs-extra');
const path = require('path');
const ejs = require('ejs');
const frontMatter = require('front-matter');
const glob = require('glob');
const fs = require('fs');

const chapterNavMap = {
    revenue: '../../layouts/partials/navRevenue.ejs'
}

function build() {
    const files = glob.sync('**/*.ejs', { cwd: './src/' });

    files.forEach(buildPage);
}

function loadLayout(layout) {
    const file = `./layouts/${layout}.ejs`;
    const data = fse.readFileSync(file, 'utf-8');

    return { file, data };
};

function compareToExisting(filePath, newContents) {
    let data;

    if (fs.existsSync(filePath)) {
        data = fs.readFileSync(filePath).toString();
    }

    if (data === newContents) {
        return true;
    };
}

function buildCompletePage(layout, pageData, pageContent) {
    return ejs.render(
        layout.data,
        Object.assign({}, pageData.attributes, {
            body: pageContent,
            chapter: pageData.chapter,
            navPath: pageData.chapterNav
        }),
        {
            filename: pageData.outputFilename
        }
    );
}

function buildPage(filePath) {
    const data = fse.readFileSync(path.join('./src', filePath), 'utf-8'),
        pageData = frontMatter(data),
        fileData = path.parse(filePath),
        chapter = pageData.chapter || fileData.dir.split('/')[0],
        outputDir = `./public/${chapter}`,
        pageContent = ejs.render(pageData.body, pageData.attributes, {
            filename: `${fileData.name}.html`
        }),
        layoutName = pageData.attributes.layout || 'default',
        layout = loadLayout(layoutName);

    let completePage;

    pageData.chapter = chapter;
    pageData.chapterNav = chapterNavMap[chapter];
    pageData.outputFilename = `${outputDir}/${fileData.name}.html`;
    
    completePage = buildCompletePage(layout, pageData, pageContent);

    if (compareToExisting(pageData.outputFilename, completePage)) {
        return;
    }

    console.log('writing: ', pageData.outputFilename);

    fse.mkdirsSync(outputDir);
    fse.writeFileSync(pageData.outputFilename, completePage);
}

build();