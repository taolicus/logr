const Koa = require('koa');
const app = new Koa();
app.use(async ctx => {
  ctx.body = 'Logr server';
});
const server = app.listen(3000, () => {
  console.log('Logr server listening on port 3000')
});

