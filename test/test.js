import test from 'tape'
import Windoe from '../index'
import createElement from 'helpers/createElement'

test('Is an object', assert => {
    const w = new Windoe()
    assert.equal(typeof w, 'object',
        'windoe should be a object')
    assert.end()
})

test('Takes a background selector as it\'s first argument', assert => {
    const el = document.createElement('div')
    const selectorName = 'data-background'
    const selector = `[${selectorName}]`
    el.setAttribute(selectorName, true)
    const w = new Windoe(selector)

    assert.equal(w.backEl instanceof HTMLElement, true, 'windoe.backEl should be a DOM element')
    assert.end()
})

test('Takes a container selector as it\'s second argument', assert => {
    const el = document.createElement('div')
    const selectorName = 'data-container'
    const selector = `[${selectorName}]`
    el.setAttribute(selectorName, true)
    const w = new Windoe(null, selector)

    assert.equal(w.containerEl instanceof HTMLElement, true, 'window.containerEl should be a DOM element')
    assert.end()
})

test('Retrieves background image', assert => {
    
})

test('Sets background image on container', assert => {

})
