'use strict'

const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/auth', require('./auth'))
  .use('/orders', require('./orders'))
  .use('/users', require('./users'))
  .use('/reviews', require('./reviews'))
  .use('/products', require('./products'))
  .use('/items', require('./items'))

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
