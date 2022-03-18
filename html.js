const list = require('functionalscript/types/list/index.js')
const operator = require('functionalscript/types/function/operator')

/** @typedef {readonly[string, list.List<Node>]} Element */

/** @typedef {Element | string} Node */

/** @type {(n: Node) => list.List<string>} */
const node = n => typeof n === 'string' ? [n] : element(n)

const nodes = list.flatMap(node)

/** @type {(element: Element) => list.List<string>} */
const element = ([tag, ns]) => list.flat([[`<`, tag, `>`], nodes(ns), [`</`, tag, `>`]])

/** @type {(e: Element) => string} */
const elementToString = e => list.fold(operator.concat)('')(element(e))

module.exports = {
    /** @readonly */
    elementToString,
}
