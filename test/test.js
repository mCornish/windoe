import test from 'tape'
import Windoe from '../index'
import createElement from './helpers/createElement'

const body = document.getElementsByTagName('body')[0]
const backSelectorName = 'data-back'
const contSelectorName = 'data-cont'
const backSelector = `[${backSelectorName}]`
const contSelector = `[${contSelectorName}]`
const backEl = document.createElement('div')
const contEl = document.createElement('div')
backEl.setAttribute(backSelectorName, '')
contEl.setAttribute(contSelectorName, '')
const imageUrl = 'http://www.mikecornish.net/social.jpg'
backEl.style = `background-image: url(${imageUrl})`

test('Take a background selector and a container selector as arguments', assert => {
    body.appendChild(backEl)
    body.appendChild(contEl)

    assert.test('Takes a background selector as it\'s first argument', t => {
        const w = new Windoe(backSelector, contSelector)
        t.equal(w.backEl instanceof HTMLElement, true, 'windoe.backEl should be a DOM element')
        t.end()
    })

    assert.test('Takes a container selector as it\'s second argument', t => {
        const w = new Windoe(backSelector, contSelector)
        t.equal(w.containerEl instanceof HTMLElement, true, 'window.containerEl should be a DOM element')
        t.end()
    })
    
    assert.end()

    backEl.remove()
    contEl.remove()
})

test('Retrieves background image URL', assert => {
    assert.test('Retrieves URL from css background', t => {
        body.appendChild(backEl)
        body.appendChild(contEl)

        const w = new Windoe(backSelector, contSelector)

        t.equal(w.getImageUrl(), imageUrl, 'w.imageUrl should be equal to the background image URL')
        t.end()

        backEl.remove()
        contEl.remove()
    })

    assert.test('Retrieves URL from image src', t => {
        const backElImg = document.createElement('img')
        backElImg.setAttribute(backSelectorName, '')
        backElImg.src = imageUrl

        body.appendChild(backElImg)
        body.appendChild(contEl)

        const w = new Windoe(backSelector, contSelector)

        t.equal(w.getImageUrl(), imageUrl, 'w.imageUrl should be equal to the image src')
        t.end()

        backElImg.remove()
        contEl.remove()
    })

    assert.end()
})

test('Sets background image on container', assert => {
    body.appendChild(backEl)
    body.appendChild(contEl)

    const w = new Windoe(backSelector, contSelector)

    const contImageUrl = contEl.style.backgroundImage.slice(5, -2)
    assert.equal(contImageUrl, imageUrl, 'The container\'s background image should be the same as the input background image')
    assert.end()
    
    backEl.remove()
    contEl.remove()
})

test('Adds class to background element', assert => {
    body.appendChild(backEl)
    body.appendChild(contEl)

    const w = new Windoe(backSelector, contSelector)
    const backClass = backEl.getAttribute('class')

    assert.equal(backClass, 'windoe-back', 'The background element\'s is given the windoe-back class')
    assert.end()

    backEl.remove()
    contEl.remove()
})

test('Adds class to container element', assert => {
    body.appendChild(backEl)
    body.appendChild(contEl)

    const w = new Windoe(backSelector, contSelector)
    const contClass = contEl.getAttribute('class')

    assert.equal(contClass, 'windoe-container', 'The background element\'s is given the windoe-back class')
    assert.end()

    backEl.remove()
    contEl.remove()

})
