const data = require('./data.js')
const list = require('functionalscript/types/list/index.js')
const object = require('functionalscript/types/object/index.js')
const html = require('./html.js')

//

/** @type {(_: object.Entry<data.Record>) => html.Element} */
const tr = ([name, { country }]) => ['tr', {}, [['td', {}, [name]], ['td', {}, [country]]]]

/** @type {html.Element} */
const table = ['table', {}, list.map(tr)(Object.entries(data.data))]

/** @type {html.Element} */
const ih = ['html', { lang: 'en' }, [
    ['head', {}, [
        ['meta', { charset: 'utf-8' }],
        ['meta', { name: 'viewport', content: 'width=device-width'}],
        ['title', {}, ['Prozorist']],
    ]],
    ['body', {}, [table]],
]]

const indexHtml = html.htmlToString(['html', { lang: 'en'}, [['head', {}, []], ['body', {}, [table]]]])

module.exports = {
    /** @readonly */
    indexHtml,
}
