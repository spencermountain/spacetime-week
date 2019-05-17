const countriesData = require('../data/countries').firstDay();
const countries = require('../data/countries').countries();
const iana = require('../../zonefile/iana');
// const spacetime = require('../index') // temporarily

function getCountryKey(country) {
  for (let key in countries) {
    if (countries[key].indexOf(country) !== -1) {
      return key
    }
  }
}

function getUnknownKey(tz) {
  // searches if current tz matches with iana
  // gets country key
  for (let key in iana) {
    if (key === tz) {
      if (!iana[key].cntry) {
        let country = getCountryKey(
            key.substr(0, key.indexOf('/'))
          )
          if (country) { return country }
        country = getCountryKey(
            (key.substr(key.indexOf('/')+1)).replace('_',' ')
          )
          if (country) { return country }
      }
      else if (iana[key].cntry) {
        return iana[key].cntry
      }
    }
  }
}

function whatCountryKey(country = '') {
    
    // checks function argument and sets default value
  let tz
    if (!country || typeof country !== 'string') {
      country = null
      tz = iana[spacetime.now().tz]
    }
    if (!country) {
      return getUnknownKey(tz);
    } else if (country) {
        return getCountryKey((country.toLowerCase()).trim())
    }
}

function weekStart(country = '') {
  let key = whatCountryKey(country)
    if (!key) { return weekStart() }
    for (let i in countries) {
      if (i === key) {
        country = countries[i]
        break
      }
    }
    for (key in countriesData) {
      for (let value of countriesData[key]) {
          if (value.indexOf(country) !== -1) {
            return { day: key, country: country }
          }
      }
    }
}

module.exports = weekStart