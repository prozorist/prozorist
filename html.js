const list = require('functionalscript/types/list/index.js')
const operator = require('functionalscript/types/function/operator/index.js')
const { compose } = require('functionalscript/types/function/index.js')

/** @typedef {readonly[string, list.List<Node>]} Element */

/** @typedef {Element | string} Node */

/** @type {(code: number) => string} */
const textEscapeCharCode = code => {
    switch(code) {
        case 0x26: return '&amp;'
        case 0x3C: return '&lt;'
        case 0x3E: return '&gt;'
        default: return String.fromCharCode(code)
    }
}

/** @type {(s: string) => list.List<string>} */
const textEscape = s => list.map(textEscapeCharCode)(list.toCharCodes(s))

/** @type {(n: Node) => list.List<string>} */
const node = n => typeof n === 'string' ? textEscape(n) : element(n)

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
