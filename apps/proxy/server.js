const express = require('express')
const app = express()
const httpProxy = require('http-proxy')
const apiProxy = httpProxy.createProxyServer()

const rootServer = 'http://localhost:3001',
  apiServer = 'http://localhost:3002',
  routeServer = 'http://localhost:3003'

app.get('/route*', function (req, res) {
  apiProxy.web(req, res, { target: routeServer })
})

app.get('/api*', function (req, res) {
  apiProxy.web(req, res, { target: apiServer })
})

app.post('/api*', function (req, res) {
  apiProxy.web(req, res, { target: apiServer })
})

app.get('/*', function (req, res) {
  apiProxy.web(req, res, { target: rootServer })
})

app.listen(3000)
