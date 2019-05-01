'use strict'
const test = require('tape')
const spacetimeWeek = require('../src')

test('week by country', t => {
  t.equal(spacetimeWeek('Canada'), 0, 'canada')
  t.equal(spacetimeWeek(' russia'), 1, 'russia')
  t.equal(spacetimeWeek('china'), 0, 'china')

  t.end()
})

test('week by iana code', t => {
  t.equal(spacetimeWeek('Canada/Eastern'), 0, 'Canada/Eastern')
  t.end()
})
