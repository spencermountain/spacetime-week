const firstDay = require('../data/countries').firstDay();
const loc = require('../data/countries').locations();
const iana = require('../../zonefile/iana');

const spacetime = require('spacetime')

function getCountry(country) {
  for (let day in firstDay) {
    for (let key in firstDay[day]) {
      if ((key === country) || (firstDay[day][key].
        indexOf(country) !== -1)) {
          return { day: day, country: firstDay[day][key] }
      }
    }
  }
  for (let item in loc) {
    if (loc[item].
        indexOf(country) !== -1) {
      return { day: 'monday', location: country }
    } 
  }
}

function getCurrent(tz) {
  // searches if current tz matches with iana
  // gets country key
  for (let key in iana) {
    if (key === tz) {
      if (!iana[key].cntry && !iana[key].loc) {
        let country = getCountry(
            key.substr(0, key.indexOf('/')) )
          if (country) { return country }
        country = getCountry(
            (key.substr(key.indexOf('/')+1)).
            replace('_',' ') )
          if (country) { return country }
      }
      else if (iana[key].loc) {
        return getCountry(country)
      }
      else if (iana[key].cntry) {
        return getCountry(iana[key].cntry)
      }
    }
  }
}

function weekStart(country = '') {
// checks function argument and sets default value
let tz
  if (!country || typeof country !== 'string') {
    country = null
    tz = spacetime.now().tz
  }
  if (!country) {
    return getCurrent(tz);
  } else if (country) {
      let firstDay = getCountry((country.toLowerCase()).trim())
        if (firstDay) { return firstDay }
          else { return weekStart() }
  }
}

module.exports = weekStart