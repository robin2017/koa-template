const path = require('path')
const views = require('koa-views');
const render = (app)=>{
    app.use(views(path.join(__dirname, '../views'), { extension: 'ejs' }));
}

module.exports = render