const data = require('./data.js')
const list = require('functionalscript/types/list/index.js')
const object = require('functionalscript/types/object/index.js')
const html = require('./html.js')

//

/** @type {(_: object.Entry<data.Record>) => html.Element} */
const tr = ([name, { country }]) => ['tr', [['td', [name]], ['td', [country]]]]

/** @type {html.Element} */
const table = ['table', list.map(tr)(Object.entries(data.data))]

const indexHtml = html.htmlToString(['html', [['body', [table]]]])

module.exports = {
    /** @readonly */
    indexHtml,
}
