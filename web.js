const data = require('./data.js')
const list = require('functionalscript/types/list/index.js')
const object = require('functionalscript/types/object/index.js')
const html = require('./html.js')

/** @type {(_: object.Entry<data.Record>) => html.Element} */
const tr = ([name, { country }]) => ['tr', [['td', { class: 'company' }, [name]], ['td', [country]]]]

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
                        ['img', { src: 'favicon.ico' }]
                    ]],
                    ['td', { id: 'edit' }, [
                        ['a', { href: 'https://github.com/prozorist/prozorist/blob/main/data.js' }, [
                            'Edit On GitHub',
                        ]],
                    ]],
                ]],
            ]],
        ]],
        ['div', { id: 'about' }, ['List of companies that cooperate with the Russian Federation']],
        ['table', { id: 'list' }, list.map(tr)(object.sort(Object.entries(data.data)))],
    ]],
]]

const indexHtml = html.htmlToString(ih)

module.exports = {
    /** @readonly */
    indexHtml,
}
