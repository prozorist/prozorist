const { indexHtml } = require('./web.js')
const html = require('./html.js')

{
    /** @type {html.Element} */
    const x = ['div', {}, ['<div>&amp;</div>', ['a', {href: 'hello"'}, []]]]
    const s = html.htmlToString(x)
    if (s !== '<!DOCTYPE html><div>&lt;div&gt;&amp;amp;&lt;/div&gt;<a href="hello&quot;"></a></div>') { throw s }
    // console.log(s)
}

// console.log(indexHtml)
