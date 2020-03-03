/* eslint-disable global-require, consistent-return */

require('dotenv').config();

const {
    MORGAN_FORMAT, NODE_ENV, PORT, SERVE_STATIC
} = process.env;
const winston = require('winston');
const helmet = require('helmet');
const path = require('path');

if (NODE_ENV === 'development') {
    const WebpackDevServer = require('webpack-dev-server');
    const config = require('./webpack.config');
    const compiler = require('webpack')(config);

    return new WebpackDevServer(compiler, config.devServer)
        .listen(PORT, 'localhost', () => {
            winston.info('Server started at port %s', PORT);
        });
}

const app = require('connect')();
app.use(require('morgan')(MORGAN_FORMAT));
app.use(require('compression')());
app.use(require('serve-static')(path.join(__dirname, SERVE_STATIC)));

app.use(helmet());
app.use(helmet.noSniff());
app.use(helmet.referrerPolicy({policy: 'same-origin'}));
app.use(helmet.featurePolicy({
    features: {
        fullscreen: ['\'self\''],
        vibrate: ['\'none\''],
        payment: ['indec.gob.ar'],
        syncXhr: ['\'none\'']
    }
}));
require('http').createServer(app).listen(
    PORT,
    () => winston.info('Server started at port %s', PORT)
);
