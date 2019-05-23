// server
const Koa = require('koa');

const app = new Koa();
const koaStatic = require('koa-static');
const path = require('path');

const PORT = 9003;

app.use(koaStatic(path.join(__dirname, 'app')));

app.listen(PORT, () => console.log(`running on http://127.0.0.1:${PORT}`));
