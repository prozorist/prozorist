const list = require('functionalscript/types/list/index.js')
const operator = require('functionalscript/types/function/operator/index.js')
const { compose } = require('functionalscript/types/function/index.js')

/** @typedef {readonly[string, list.List<Node>]} Element */

/** @typedef {Element | string} Node */

/** @type {(s: string) => list.List<string>} */
const escape = s => [s];

/** @type {(n: Node) => list.List<string>} */
const node = n => typeof n === 'string' ? escape(n) : element(n)

const nodes = list.flatMap(node)

/** @type {(element: Element) => list.List<string>} */
const element = ([tag, ns]) => list.flat([[`<`, tag, `>`], nodes(ns), [`</`, tag, `>`]])

const elementToString = compose(element)(list.fold(operator.concat)(''))

module.exports = {
    /** @readonly */
    element,
    /** @readonly */
    elementToString,
}
