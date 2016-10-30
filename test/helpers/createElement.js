module.exports.default = function (tag, selector) {
    const el = document.createElement(tag)
    el.setAttribute(tag, true)
    return el
}
