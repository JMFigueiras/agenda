const {dest, parallel, src} = require('gulp');
const config = require('./config.json');
const $ = require('gulp-load-plugins')();

const clean = () => require('del')(config.clean.dist);

const copy = () => src(config.copy.dist.src, {base: '.'})
    .pipe(dest(config.copy.dist.dest));

const webpack = () => src('index.js')
    .pipe(require('webpack-stream')(require('../webpack.config.prod.js'), require('webpack')))
    .pipe(dest('dist/public/assets'));

const distPackage = () => src('./package.json')
    .pipe($.jsonEditor(
        json => {
            delete json.devDependencies;
            return json;
        }, {end_with_newline: true}
    ))
    .pipe(dest('dist/'));

exports.clean = clean;
exports.dist = parallel(webpack, copy, distPackage);
