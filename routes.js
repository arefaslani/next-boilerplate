const routes = module.exports = require('next-routes')()
routes
  .add('about')
  .add('post', '/posts/:id')
