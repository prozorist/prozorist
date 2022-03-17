const data = require('./data.js')
const list = require('functionalscript/types/list/index.js')
const object = require('functionalscript/types/object/index.js')

/** @type {(_: object.Entry<data.Record>) => (_: string) => string} */
const tr = ([name, record]) => s => `${s}<tr><td>${name}</td><td>${record.country}</td></tr>`

const table = () => list.reduce(tr)('')(Object.entries(data.data))

const html = `<html><body><table>${table()}</table></body></html>`

module.exports = {
    /** @readonly */
    html,
}
