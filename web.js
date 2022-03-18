const data = require('./data.js')
const list = require('functionalscript/types/list/index.js')
const object = require('functionalscript/types/object/index.js')
const operator = require('functionalscript/types/function/operator')

//

/** @typedef {readonly[string, list.List<ElementOrText>]} Element */

/** @typedef {Element | string} ElementOrText */

/** @type {(e: ElementOrText) => list.List<string>} */
const elementOrTextToStrings = e => typeof e === 'string' ? [e] : elementToStrings(e)

const listToStrings = list.flatMap(elementOrTextToStrings)

/** @type {(element: Element) => list.List<string>} */
const elementToStrings = ([tag, es]) => list.flat([[`<`, tag, `>`], listToStrings(es), [`</`, tag, `>`]])

/** @type {(element: Element) => string} */
const elementToString = e => list.fold(operator.concat)('')(elementToStrings(e))

//

// /** @type {(_: object.Entry<data.Record>) => (_: string) => string} */
// const tr = ([name, { country }]) => s => `${s}<tr><td>${name}</td><td>${country}</td></tr>`

// const table = list.reduce(tr)('')(Object.entries(data.data))

// const html = `<html><body><table>${table}</table></body></html>`

/** @type {(_: object.Entry<data.Record>) => Element} */
const tr = ([name, { country }]) => ['tr', [['td', [name]], ['td', [country]]]]

/** @type {Element} */
const table = ['table', list.map(tr)(Object.entries(data.data))]

const html = elementToString(['html', [['body', [table]]]])

module.exports = {
    /** @readonly */
    html,
}
