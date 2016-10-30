import test from 'tape'
import Windoe from '../index'
import createElement from './helpers/createElement'

test('Take a background selector and a container selector as arguments', assert => {
    const body = document.getElementsByTagName('body')[0]
    const el = document.createElement('div')
    const backSelectorName = 'data-back'
    const contSelectorName = 'data-cont'
    const backSelector = `[${backSelectorName}]`
    const contSelector = `[${contSelectorName}]`

    assert.test('Takes a background selector as it\'s first argument', t => {
        el.setAttribute(backSelectorName, '')
        el.style = `background-image: url('http://www.mikecornish.net/social.jpg')`
        body.appendChild(el)
        const w = new Windoe(backSelector, '.container')
        t.equal(w.backEl instanceof HTMLElement, true, 'windoe.backEl should be a DOM element')
        t.end()
    })

    assert.test('Takes a container selector as it\'s second argument', t => {
        el.setAttribute(contSelectorName, '')
        body.appendChild(el)
        const w = new Windoe(backSelector, contSelector)
        t.equal(w.containerEl instanceof HTMLElement, true, 'window.containerEl should be a DOM element')
        t.end()
    })

    assert.end()
})

test('Retrieves background image URL', assert => {
    const body = document.getElementsByTagName('body')[0]
    const selectorName = 'data-back'
    const selector = `[${selectorName}]`
    const imageUrl = 'http://www.mikecornish.net/social.jpg'

    assert.test('Retrieves URL from css background', t => {
        const el = document.createElement('div')
        el.setAttribute(selectorName, '')
        el.style = `background-image: url(${imageUrl})`
        body.appendChild(el)
        const w = new Windoe(selector, '.container')

        t.equal(w.getImageUrl(), imageUrl, 'w.imageUrl should be equal to the background image URL')
        t.end()
    })

    assert.test('Retrieves URL from image src', t => {
        const el = document.createElement('img')
        el.setAttribute(selectorName, '')
        el.src = imageUrl
        body.appendChild(el)
        const w = new Windoe(selector, '.container')

        t.equal(w.getImageUrl(), imageUrl, 'w.imageUrl should be equal to the image src')
        t.end()
    })
})

test('Sets background image on container', assert => {
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

    const w = new Windoe(backSelector, contSelector)

    const contImageUrl = contEl.style.backgroundImage
    assert.equal(contImageUrl, imageUrl, 'The container\'s background image should be the same as the input background image')
    assert.end()
})
