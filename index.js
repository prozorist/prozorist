const { indexHtml } = require('./web.js')
const { writeFileSync, existsSync } = require('fs')

writeFileSync('web/index.html', indexHtml(existsSync))
