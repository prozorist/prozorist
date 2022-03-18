const list = require('functionalscript/types/list/index.js')
const object = require('functionalscript/types/object/index.js')
const operator = require('functionalscript/types/function/operator/index.js')
const { compose } = require('functionalscript/types/function/index.js')

/**
 * @typedef {|
 *  'a' |
 *  'b' |
 *  'body' |
 *  'canvas' |
 *  'div' |
 *  'h1' |
 *  'h2' |
 *  'h3' |
 *  'h4' |
 *  'h5' |
 *  'h6' |
 *  'head' |
 *  'html' |
 *  'label' |
 *  'p' |
 *  'pre' |
 *  'script' |
 *  'table' |
 *  'td' |
 *  'title' |
 *  'tr'
 * } Tag
 */

/**
 * @typedef {|
 *  'input' |
 *  'link' |
 *  'meta'
 * } ShortTag
 */

/** @typedef {readonly[ShortTag, Attributes]} Element2 */

/** @typedef {readonly[Tag, Attributes, Nodes]} Element3*/

/** @typedef {Element2 | Element3} Element */

/**
 * @typedef {{
 *  readonly[k in string]: string
 * }} Attributes
 */

/** @typedef {list.List<Node>} Nodes */

/** @typedef {Element | string} Node */

/**
 * https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-in-html
 *
 * @type {(code: number) => string}
 */
const escapeCharCode = code => {
    switch (code) {
        case 0x22: return '&quot;'
        case 0x26: return '&amp;'
        case 0x3C: return '&lt;'
        case 0x3E: return '&gt;'
        default: return String.fromCharCode(code)
    }
}

const escape = compose(list.toCharCodes)(list.map(escapeCharCode))

/** @type {(n: Node) => list.List<string>} */
const node = n => typeof n === 'string' ? escape(n) : element(n)

const nodes = list.flatMap(node)

/** @type {(a: object.Entry<string>) => list.List<string>} */
const attribute = ([name, value]) => list.flat([[' ', name, '="'], escape(value), ['"']])

const attributes = compose(Object.entries)(list.flatMap(attribute))

/** @type {(element: Element) => list.List<string>} */
const element = e => {
    const f = () => {
        if (e.length === 2) {
            const [tag, a] = e
            return [[`<`, tag], attributes(a), [`/>`]]
        }
        const [tag, a, ns] = e
        return [['<', tag], attributes(a), ['>'], nodes(ns), ['</', tag, '>']]
    }
    return list.flat(f())
}

const html = compose(element)(list.concat(['<!DOCTYPE html>']))

const htmlToString = compose(html)(list.fold(operator.concat)(''))

module.exports = {
    /** @readonly */
    element,
    /** @readonly */
    html,
    /** @readonly */
    htmlToString,
}
