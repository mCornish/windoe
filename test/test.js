import test from 'tape'
import Windoe from '../index'
import createElement from './helpers/createElement'

const IMAGE_URL = 'http://www.mikecornish.net/social.jpg'
const BACK_IMAGE_STRING = `background-image: url(${IMAGE_URL})`

test('Take a background selector and a container selector as arguments', assert => {
    const backEl = createElement('div', 'data-back', {'style': BACK_IMAGE_STRING})
    const contEl = createElement('div', 'data-cont')
    const w = new Windoe('[data-back]', '[data-cont]')

    assert.test('Takes a background selector as it\'s first argument', t => {
        t.equal(w.backEl instanceof HTMLElement, true, 'windoe.backEl should be a DOM element')
        t.end()
    })

    assert.test('Takes a container selector as it\'s second argument', t => {
        t.equal(w.containerEl instanceof HTMLElement, true, 'window.containerEl should be a DOM element')
        t.end()
    })
    
    assert.end()

    backEl.remove()
    contEl.remove()
})

test('Retrieves background image URL', assert => {
    const contEl = createElement('div', 'data-cont')

    assert.test('Retrieves URL from css background', t => {
        const backEl = createElement('div', 'data-back', {'style': BACK_IMAGE_STRING})
        const w = new Windoe('[data-back]', '[data-cont]')

        t.equal(w.getImageUrl(), IMAGE_URL, 'w.imageUrl should be equal to the background image URL')
        t.end()

        backEl.remove()
    })

    assert.test('Retrieves URL from image src', t => {
        const backEl = createElement('img', 'data-cont', {'src': IMAGE_URL})
        const w = new Windoe('[data-back]', '[data-cont]')

        t.equal(w.getImageUrl(), IMAGE_URL, 'w.imageUrl should be equal to the image src')
        t.end()

        backEl.remove()
    })

    assert.end()

    contEl.remove()
})

test('Sets background image on container', assert => {
    const backEl = createElement('div', 'data-back', {'style': BACK_IMAGE_STRING})
    const contEl = createElement('div', 'data-cont')
    const w = new Windoe('[data-back]', '[data-cont]')

    const contImageUrl = w.containerEl.style.backgroundImage.slice(5, -2)
    assert.equal(contImageUrl, IMAGE_URL, 'The container\'s background image should be the same as the input background image')
    assert.end()
    
    backEl.remove()
    contEl.remove()
})

test('Adds class to background element', assert => {
    const backEl = createElement('div', 'data-back', {'style': BACK_IMAGE_STRING})
    const contEl = createElement('div', 'data-cont')
    const w = new Windoe('[data-back]', '[data-cont]')

    const backClass = w.backEl.getAttribute('class')

    assert.equal(backClass, 'windoe-back', 'The background element\'s is given the windoe-back class')
    assert.end()

    backEl.remove()
    contEl.remove()
})

test('Adds class to container element', assert => {
    const backEl = createElement('div', 'data-back', {'style': BACK_IMAGE_STRING})

    assert.test('Adds class when container has no class already', t => {
        const contEl = createElement('div', 'data-cont-foo')
        const w = new Windoe('[data-back]', '[data-cont-foo]')

        const contClass = w.containerEl.getAttribute('class')

        t.equal(contClass, 'windoe-container', 'The container element is given the windoe-container class')
        t.end()

        contEl.remove()
    })
    
    assert.test('Adds class when container already has a class', t => {
        const contEl = createElement('div', 'data-cont-bar', {'class': 'foo'})
        const w = new Windoe('[data-back]', '[data-cont-bar]')

        const contClass = w.containerEl.getAttribute('class')

        t.equal(contClass, 'foo windoe-container', 'The windoe-container class is added to the container\'s existing class')
        t.end()

        contEl.remove()
    })

    assert.end()

    backEl.remove()
})
