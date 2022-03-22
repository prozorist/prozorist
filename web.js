const data = require('./data.js')
const list = require('functionalscript/types/list/index.js')
const object = require('functionalscript/types/object/index.js')
const html = require('./html.js')

/** @type {(_: object.Entry<data.Record>) => list.List<html.Element>} */
const tr = ([name, { country, industry, notes, source }]) => [
    ['tr', [
        ['td', { class: 'company' }, [name]],
        ['td', [industry ?? '']],
        ['td', [country]],
        ['td', [source === undefined ? '' : ['a', { href: source }, ['source']]]]
    ]],
    ['tr', [
        ['td', []],
        ['td', { class: 'notes', colspan: '3' }, [notes ?? '']]
    ]]
]

/** @type {html.Element} */
const ih = ['html', { lang: 'en' }, [
    ['head', [
        ['meta', { charset: 'utf-8' }],
        ['meta', { name: 'viewport', content: 'width=device-width'}],
        ['link', { rel: 'stylesheet', href: 'index.css' }],
        ['link', { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
        ['title', ['FrontList.Finance']],
    ]],
    ['body', [
        ['div', { id: 'header' }, [
            ['table', [
                ['tr', [
                    ['td', { id: 'name' }, [
                        ['img', { src: 'frontlist-logo.png' }]
                    ]],
                    ['td', { id: 'edit' }, [
                        ['a', { href: 'https://github.com/prozorist/prozorist/blob/main/data.js' }, [
                            'Edit On GitHub',
                        ]],
                    ]],
                ]]
            ]],
        ]],
        ['div', { id: 'about' }, ['List of companies that cooperate with the Russian Federation']],
        ['table', { id: 'list' }, list.flatMap(tr)(object.sort(Object.entries(data.data)))],
    ]],
]]

const indexHtml = html.htmlToString(ih)

module.exports = {
    /** @readonly */
    indexHtml,
}
