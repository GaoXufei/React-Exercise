const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    proxy('/api', {
      target: 'http://localhost:3000/',
      ws: true,
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      }
    })
  )
}