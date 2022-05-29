const data = require('./data.js')
const list = require('functionalscript/types/list/index.js')
const object = require('functionalscript/types/object/index.js')
const html = require('functionalscript/html/index.js')

/** @typedef {(fileName: string) => boolean} FileExists */

/** @type {(_: string) => string} */
const getLogoName = name => `logo/${name.replace(/\s+/g, '_').toLowerCase()}.png`

/** @type {(fileExists: FileExists) => (name: string) => (notes: string|undefined) => html.Element} */
const tdBrand = fileExists => name => notes =>
{
    const logoName = getLogoName(name)
    return fileExists(`web/${logoName}`)
    ? ['td', { class: 'company'}, [['img', { id: 'logo', src: logoName }]]]
    : ['td', { class: 'company', title: notes ?? '' }, [name]]
}

/** @type {(fileExists: FileExists) => (_: object.Entry<data.Record>) => html.Element} */
const tr = fileExists => ([name, { country, industry, notes, source }]) => ['tr', { id: 'row'}, [
    tdBrand(fileExists)(name)(notes),
    ['td', { id: 'table-data'}, [industry ?? '']],
    ['td', { id: 'table-data'}, [country]],
    ['td', { id: 'table-data'}, [source === undefined ? '' : ['a', { href: source }, ['source']]]]
]]

/** @type {(_: FileExists) => html.Element} */
const ih = fileExists => ['html', { lang: 'en' }, [
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
                    ['td', [
                        ['img', { src: 'frontlist-logo.png' }]
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
        ['table', { id: 'list' }, list.map(tr(fileExists))(object.sort(Object.entries(data.data)))],
    ]],
]]

/** @type {(_: FileExists) => string} */
const indexHtml = fileExists => html.htmlToString(ih(fileExists))

module.exports = {
    /** @readonly */
    indexHtml,
}
