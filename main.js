'use strict'

const Express = require('express')

async function StartIze() {
  console.log('k')
}

StartIze()
 .then(_ => {
   Express()
    .get('/', (req, res) => {
      res.end('IZE.')
    })
    .listen(process.env.PORT || 3000, () => console.log('[ ize ] Server is Online.'))
 })
 .catch(err => console.error(err))