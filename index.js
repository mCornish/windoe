module.exports = Window
module.exports.default = module.exports

function Window(backSelector, containerSelector) {
    this.backEl = document.querySelector(backSelector)
    this.containerEl = document.querySelector(containerSelector)
}
