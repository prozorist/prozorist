const { indexHtml } = require('./web.js')
const html = require('./html.js')

{
    /** @type {html.Element} */
    const x = ['div', ['<div>&amp;</div>']]
    const s = html.elementToString(x)
    if (s !== '<div>&lt;div&gt;&amp;amp;&lt;/div&gt;</div>') { throw s }
    console.log(s)
}

console.log(indexHtml)