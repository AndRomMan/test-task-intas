/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// команды запуска npm-plugins для тестирования
// npx htmlhint source/**/*.html
// npx eslint source/**/*.js
// npx eslint --fix source/js/*.js
// npx stylelint source/**/*.scss
// npx stylelint build/**/*.css
// npx babel source/js/*.js -o script-compiled.js
// npx babel source/js/*.js src -d build/js

'use strict';
// подключаем Gulp
const gulp = require('gulp');

const {series, parallel, watch, src, dest} = require('gulp');

// переименование файлов
const rename = require('gulp-rename');
// удаление файлов
const del = require('del');

// вспомогательные плагины
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const concat = require('gulp-concat');

// ========== javascript producing module ==========
// const terser = require('gulp-terser');
const babel = require('gulp-babel');

// ========= css producing module =========
const sass = require('gulp-sass');
// сжатие и оптимизации CSS
const csso = require('gulp-csso');
// PostCSS
const postcss = require('gulp-postcss');

// подключаем плагины PostCss
// const autoprefixer = require('autoprefixer');
const autoprefixer = require('gulp-autoprefixer');

// ========= html producing module =========
const fileinclude = require('gulp-file-include');
// const htmlmin = require('gulp-html-minifier-terser');

// ========= img producing module =========
let svgmin = require('gulp-svgmin');

// плагин для сборки svg-sprite
const svgstore = require('gulp-svgstore');

// ========= file path =========
const source = 'src/';
const build = 'build/';

const path = {
  html: {
    source: source + '*.html',
    watch: source + '**/*.html',
    build,
  },
  style: {
    source: source + 'sass/style.scss',
    watch: source + 'sass/**/*.scss',
    build: build + 'css/',
  },
  script: {
    source: source + 'js/*.js',
    watch: source + 'js/**/*.js',
    dest: source + 'js/',
    build: build + 'js/',
  },
  spriteSVG: {
    source: source + 'img/sprite-svg/*.svg',
    watch: source + 'img/sprite-svg/*.svg',
    compressedFolder: source + 'img/sprite-svg/compressed/',
    build: build + 'img/',
  },
  iconSVG: {
    source: source + 'img/*.svg',
    compressedFolder: source + 'img/compressed/',
    build: build + 'img/',
  },
  favicon: {
    source: source + 'favicon/initial-img/*.png',
    manifest: source + 'favicon/*.*',
    compressedFolder: source + 'favicon/compressed/',
    build,
  },
  font: {
    source: source + 'fonts/*.{woff,woff2}',
    build: build + 'fonts/',
  },
};

// ========== browser autoreload ==========
const browsersync = require('browser-sync').create();

function refresh(done) {
  browsersync.reload();
  done();
}

function browserSync() {
  browsersync.init({
    server: {
      baseDir: build,
      index: 'index.html',
    },
    port: 3000,
    notify: false, // Отключаем уведомления
    online: false, // false, если хотите работать без подключения к интернету
    open: true,
    cors: true,
    ui: false,
    // browser: ['firefox'],
    browser: ['chrome'],
    // browser: ["chrome", "firefox"]
  });
}

// ========== javascript producing module ==========
function getJS() {
  return (
    src(path.script.source)
      .pipe(plumber())
      .pipe(sourcemap.init())
      .pipe(
        babel({
          presets: ['@babel/preset-env'],
        })
      )
      // .pipe(
      // terser({
      // ecma: 2015,
      // ecma: 5,
      // ecma: 2015, // specify one of: 5, 2015, 2016, etc.
      // })
      // )
      // .pipe(rename({suffix: '.min'}))
      .pipe(concat('main.js'))
      .pipe(sourcemap.write('.'))
      .pipe(dest(path.script.build))
      .pipe(browsersync.stream())
  );
}

// ========= css producing module =========
function getCSS() {
  return (
    src(path.style.source)
      .pipe(plumber())
      .pipe(sourcemap.init())
      .pipe(sass())
      // будем использовать gulp-autoprefixer,
      // поскольку возникли проблемы с совместимостью
      // после полного обновления post-css
      .pipe(autoprefixer())
      .pipe(dest(path.style.build))
      .pipe(csso())
      .pipe(rename({suffix: '.min'}))
      .pipe(sourcemap.write('.'))
      .pipe(dest(path.style.build))
      .pipe(browsersync.stream())
  );
}

function getHTML() {
  return (
    src(path.html.source)
      .pipe(plumber())
      .pipe(
        fileinclude({
          prefix: '@@',
        })
      )
      // .pipe(
      //   htmlmin({
      //     collapseWhitespace: true,
      //     collapseInlineTagWhitespace: true,
      //     removeComments: true,
      //   })
      // )
      .pipe(dest(path.html.build))
      .pipe(browsersync.stream())
  );
}

function watchFiles() {
  gulp.watch(path.style.watch, getCSS);
  gulp.watch(path.script.watch, getJS);
  gulp.watch(path.html.watch, getHTML);
  gulp.watch(path.spriteSVG.watch, gulp.series(getSvgSprite, getHTML));

  // gulp.watch(path.spriteSVG.watch, gulp.series(compressSvgForSprite, getSvgSprite, workHTML, refresh));
  // gulp.watch(path.style.watch, gulp.series(workCSS, refresh));
  // gulp.watch(path.script.watch, gulp.series(workJS, refresh));
  // gulp.watch(path.html.watch, gulp.series(workHTML, refresh));
}

// ========= svg sprite module =========
function compressSvgForSprite() {
  return gulp
    .src(path.spriteSVG.source)
    .pipe(
      svgmin({
        plugins: [
          {removeDimensions: true},
          {removeViewBox: false},
          {cleanupNumericValues: {floatPrecision: 2}},
          {cleanupListOfValues: {floatPrecision: 2}},
          {removeXMLNS: true},
          {removeStyleElement: true},
          {removeScriptElement: true},
          {removeOffCanvasPaths: true},
          {reusePaths: true},
        ],
      })
    )
    .pipe(gulp.dest(path.spriteSVG.compressedFolder));
}

function createSvgSprite() {
  return src(path.spriteSVG.compressedFolder + '*.svg')
    .pipe(plumber())
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename('sprite.svg'))
    .pipe(dest(path.spriteSVG.compressedFolder))
    .pipe(dest(path.img.compressedFolder));
}


function compressSvg() {
  return gulp
    .src(path.iconSVG.source)
    .pipe(
      svgmin({
        plugins: [
          {removeDimensions: true},
          {removeViewBox: false},
          {cleanupNumericValues: {floatPrecision: 2}},
          {cleanupListOfValues: {floatPrecision: 2}},
          // {removeXMLNS: true},
          {removeStyleElement: true},
          {removeScriptElement: true},
          {removeOffCanvasPaths: true},
          {reusePaths: true},
        ],
      })
    )
    .pipe(gulp.dest(path.iconSVG.compressedFolder));
}

// ========= erase module =========
function eraseCompressedImg() {
  return del(path.img.compressedFolder);
}

function eraseBuild() {
  return del(build);
}

function eraseCSS() {
  return del(path.style.build);
}

function eraseHTML() {
  return del(path.html.build + '*.html');
}

function eraseJS() {
  return del(path.script.build);
}

function eraseFonts() {
  return del(path.font.build);
}

function eraseImg() {
  return del(path.img.build);
}

function eraseSpriteSvg() {
  return del(path.spriteSVG.compressedFolder + '*.svg');
}

function eraseMap() {
  return del(build + '/**/*.map');
}

// ========= favicon module =========

function eraseFavicon() {
  return del(path.favicon.compressedFolder);
}

function compressFavicon() {
  return src(path.favicon.source)
    .pipe(plumber())
    .pipe(imagemin([imagemin.optipng({optimizationLevel: 3})]))
    .pipe(gulp.dest(path.favicon.compressedFolder));
}

function copyFaviconManifest() {
  return src(path.favicon.manifest).pipe(dest(path.favicon.compressedFolder));
}

function copyFaviconToBuild() {
  return src(path.favicon.compressedFolder + '*.*').pipe(dest(path.favicon.build));
}

// exports.copyFaviconToBuild = copyFaviconToBuild;
// exports.copyFaviconManifest = copyFaviconManifest;
// exports.compressFavicon = compressFavicon;
// exports.eraseFavicon = eraseFavicon;

let createFavicon = gulp.series(eraseFavicon, compressFavicon, copyFaviconManifest, copyFaviconToBuild);
exports.createFavicon = createFavicon;

let getFaviconToBuild = gulp.series(createFavicon, copyFaviconToBuild);
exports.getFaviconToBuild = getFaviconToBuild;

// ========= copy module =========
function copyImgToBuild() {
  return src(path.img.compressedFolder + '*.{jpg,png,svg,webp}').pipe(dest(path.img.build));
}

function copyFontToBuild() {
  return src(path.font.source).pipe(dest(path.font.build));
}

// ========= build module =========
let getPng = gulp.series(eraseCompressedImg, compressJpgPng, compressPngQuant);
// exports.getPng = getPng;

let getSvgSprite = gulp.series(eraseSpriteSvg, compressSvgForSprite, createSvgSprite);

let getImg = gulp.series(
  compressSvg,
  getSvgSprite,
  copyImgToBuild
);

let startServer = gulp.parallel(watchFiles, browserSync);
let getWorkFiles = gulp.series(getCSS, getJS, getHTML);
let workStart = gulp.series(getWorkFiles, startServer);
let buildProject = gulp.series(eraseBuild, getImg, getWorkFiles, getFaviconToBuild, copyFontToBuild, eraseMap);
let buildAndStart = gulp.series(eraseBuild, getImg, getWorkFiles, getFaviconToBuild, copyFontToBuild, startServer);

// ========= exports =========
// let getSvgToBuild = gulp.series(compressSvg, copyImgToBuild);
// exports.getSvgToBuild = getSvgToBuild;
// ========= exports =========
exports.getSvgSprite = getSvgSprite;
// exports.eraseBuild = eraseBuild;
exports.getImg = getImg;
exports.buildProject = buildProject;
exports.startServer = startServer;
exports.buildAndStart = buildAndStart;
exports.workStart = workStart;
exports.getWorkFiles = getWorkFiles;

// exports.watchFiles = watchFiles;
// exports.browserSync = browserSync;
exports.getHTML = getHTML;
exports.getJS = getJS;
exports.getCSS = getCSS;
// exports.checkHtml = checkHtml;

// exports.compressSvgForSprite = compressSvgForSprite;
// exports.compressSvg = compressSvg;
// exports.createSvgSprite = createSvgSprite;

// exports.copyImgToBuild = copyImgToBuild;
// exports.copyFontToBuild = copyFontToBuild;

// exports.eraseCompressedImg = eraseCompressedImg;
// exports.eraseCSS = eraseCSS;
// exports.eraseHTML = eraseHTML;
// exports.eraseJS = eraseJS;
// exports.eraseFonts = eraseFonts;
// exports.eraseImg = eraseImg;
// exports.eraseSpriteSvg = eraseSpriteSvg;
// exports.eraseMap = eraseMap;
