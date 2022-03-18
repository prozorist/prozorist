const { indexHtml } = require('./web.js')
const { writeFileSync } = require('fs')

writeFileSync('web/index.html', indexHtml)
