import test from 'tape'
import Windoe from '../index'
import createElement from './helpers/createElement'

test('Take a background selector and a container selector as arguments', assert => {
    const body = document.getElementsByTagName('body')[0]
    const backSelectorName = 'data-back'
    const contSelectorName = 'data-cont'
    const backSelector = `[${backSelectorName}]`
    const contSelector = `[${contSelectorName}]`
    const backEl = document.createElement('div')
    const contEl = document.createElement('div')
    backEl.setAttribute(backSelectorName, '')
    backEl.style = `background-image: url('http://www.mikecornish.net/social.jpg')`
    contEl.setAttribute(contSelectorName, '')
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
    const body = document.getElementsByTagName('body')[0]
    const backSelectorName = 'data-back'
    const contSelectorName = 'data-cont'
    const backSelector = `[${backSelectorName}]`
    const contSelector = `[${contSelectorName}]`
    const contEl = document.createElement('div')
    const imageUrl = 'http://www.mikecornish.net/social.jpg'
    contEl.setAttribute(contSelectorName, '')
    body.appendChild(contEl)

    assert.test('Retrieves URL from css background', t => {
        const backEl = document.createElement('div')
        backEl.setAttribute(backSelectorName, '')
        backEl.style = `background-image: url(${imageUrl})`
        body.appendChild(backEl)
        const w = new Windoe(backSelector, contSelector)

        t.equal(w.getImageUrl(), imageUrl, 'w.imageUrl should be equal to the background image URL')
        t.end()

        backEl.remove()
    })

    assert.test('Retrieves URL from image src', t => {
        const backEl = document.createElement('img')
        backEl.setAttribute(backSelectorName, '')
        backEl.src = imageUrl
        body.appendChild(backEl)
        const w = new Windoe(backSelector, contSelector)

        t.equal(w.getImageUrl(), imageUrl, 'w.imageUrl should be equal to the image src')
        t.end()

        backEl.remove()
    })

    assert.end()

    contEl.remove()
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

    body.appendChild(backEl)
    body.appendChild(contEl)

    const w = new Windoe(backSelector, contSelector)

    const contImageUrl = contEl.style.backgroundImage.slice(5, -2)
    assert.equal(contImageUrl, imageUrl, 'The container\'s background image should be the same as the input background image')
    assert.end()
    
    backEl.remove()
    contEl.remove()
})
