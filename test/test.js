const test = require('tape')
const Windoe = require('../index.js')

test('Is an object', assert => {
    const w = new Windoe()
    assert.equal(typeof w, 'object',
        'windoe should be a object')
    assert.end()
})

test('Takes in a background selector', assert => {
    const selector = '[data-background]'
    const w = new Windoe(selector)
    console.log(w.backEl)
    assert.equal(typeof w.backEl, 'object', 'windoe.backEl should be an object')
    assert.end()
})
