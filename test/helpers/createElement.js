export default function (tag, selector, attributes) {
    const body = document.getElementsByTagName('body')[0]
    const el = document.createElement(tag)

    el.setAttribute(selector, '')

    for (let attr in attributes) {
        el.setAttribute(attr, attributes[attr])
    }

    body.appendChild(el)

    return el
}
