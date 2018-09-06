import { section1_1 } from './section1-1';
import { section1_2 } from './section1-2';
import { section2_1 } from './section2-1';
import { section2_2 } from './section2-2';
import { pagerInit } from './pager/pager';

const qs = location.search;

function drop2() {
    section1_1();
    setTimeout(section1_2, 301);
}

function needleDrop(page) {
    [section1_1, drop2, section2_1][page-1]();
}

function proceed(page) {
    [section1_1, section1_2, section2_1][page-1]();
}

function next(page) {
    proceed(page)
}

function prev(page) {
    needleDrop(page);
}

pagerInit(next, prev);

if (qs.indexOf('categories') !== -1) {
    needleDrop(3)
} else {
    section1_1();
}

