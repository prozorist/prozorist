const { html } = require('./web.js')
const { writeFileSync } = require('fs')

writeFileSync('web/index.html', html)