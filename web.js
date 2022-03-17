const data = require('./data.js')

const table = () => {
    for (const i in Object.entries(data)) {

    }
    return ''
}

const html = `<html><body><table>${table()}</table></body></html>`

module.exports = {
    /** @readonly */
    html,
}
