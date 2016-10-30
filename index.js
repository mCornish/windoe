module.exports = Windoe
module.exports.default = module.exports

function Windoe (backSelector, containerSelector) {
    if (typeof backSelector != 'string') {
        throw `Windoe requires a selector as argument 1. Currently ${backSelector}.`
    }
    if (typeof containerSelector != 'string') {
        throw `Windoe requires a selector as argument 2. Currently ${containerSelector}.`
    }

    this.backEl = document.querySelector(backSelector)
    this.containerEl = document.querySelector(containerSelector)

    this.imageUrl = getImageUrl(this.backEl)

    // Add Windoe classes to elements
    const backClass = newClassString(this.backEl, 'windoe-back')
    const contClass = newClassString(this.containerEl, 'windoe-container')
    this.backEl.setAttribute('class', backClass)
    this.containerEl.setAttribute('class', contClass)

    // Set container background image
    this.containerEl.style = `background-image: url(${this.imageUrl})`

}

Windoe.prototype.getImageUrl = function () {
    return this.imageUrl
}


function getImageUrl ($el) {
    const cssUrl = getStyleUrl($el)
    const imageSrc = $el.src

    if (cssUrl) {
        // Set URL from css background-image
        return cssUrl
    } else if (imageSrc) {
        // Set URL from image src
        return imageSrc
    } else {
        // Has no image URL
        throw `No image URl found on background element '${$el}'`
    }
}

function getStyleUrl ($el) {
    const backImage = $el.style.backgroundImage
    const startIndex = backImage.indexOf("url(")
    const endIndex = backImage.indexOf(")")
    return backImage.substring(startIndex + 5, endIndex - 1)
}

function newClassString ($el, className) {
    const classString = $el.getAttribute('class')
    return classString ? `${classString} ${className}` : className
}
