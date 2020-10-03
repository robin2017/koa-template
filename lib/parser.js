const bodyParser = require('koa-bodyparser');
const parser = (app) => {
    app.use(bodyParser());
}

module.exports = parser