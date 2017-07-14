
const Koa = require('koa')
const serve = require('koa-static')

const app = new Koa()

app.use(serve('src'))
app.listen(8080)

console.log("Server is running");
