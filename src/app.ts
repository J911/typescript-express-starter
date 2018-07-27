import * as express from 'express'
const app = express()

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!')
})

app.use('/', require('./routes/echo'))

interface Err extends Error {
  status: number
  data?: any
}

// catch 404 and forward to error handler
app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
  let err = new Error('Not Found') as Err
  err.status = 404
  next(err)
})

// error handle
app.use(function (err: Err, req: express.Request, res: express.Response, next: express.NextFunction) {
  // render the error page
  res.status(err.status || 500)
  res.json({
    message: err.message,
    data: err.data
  })
})

export default app
