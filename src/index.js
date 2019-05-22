let weekStart = require('./input/weekStart')
let spacetime = require('spacetime')

module.exports = weekStart = spacetime.extend({
  weekStart: () => {
    return weekStart()
  }
})
