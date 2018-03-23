//import dependencys
const Koa = require('koa'),
  app = new Koa(),
  json = require('koa-json'),
  onerror = require('koa-onerror'),
  bodyparser = require('koa-bodyparser'),
  logger = require('koa-logger'),
  cors = require('koa2-cors')

const auth = require('./server/routes/auth.js')
const index = require('./server/routes/index.js')
const order = require('./server/routes/order.js')

// error handler
onerror(app)

//middlewares
app.use(cors())
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

// app.use(function* (next){
//   let start = new Date
//   yield next
//   let ms = new Date - start
//   console.log('%s %s - %s', this.method, this.url, ms) // 显示执行的时间
// })

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

//routes
app.use(index.routes(), index.allowedMethods())
app.use(auth.routes(), auth.allowedMethods()) // 挂载到koa-router上，同时会让所有的auth的请求路径前面加上'/auth'的请求路径。
app.use(order.routes(), order.allowedMethods()) 

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

app.listen(3000,() => {
  console.log('Koa is listening in 3000')
})

module.exports = app