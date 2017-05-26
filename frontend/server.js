const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    // server.get('/admin')
    // server.get('/p/:id', (req, res) => {
    //   const actualPage = '/post'
    //   const queryParams = { id: req.params.id }
    //   app.render(req, res, actualPage, queryParams)
    // })
    server.get(/\/static\/.*|\/_next\/.*/, (req, res) => {
      return handle(req, res);
    });

    server.get('/:page?', (req, res) => {
      //   // const queryParams = { page: req.params.page };
      app.render(req, res, '/', req.params);
      // return handle(req, res);
    });

    // server.get('*', (req, res) => {
    //   return handle(req, res)
    // })

    server.listen(8000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:8000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })