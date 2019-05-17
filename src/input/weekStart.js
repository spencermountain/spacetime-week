const countriesData = require('../data/countries').firstDay();
const iana = require('../../zonefile/iana');
const spacetime = require('../index')

function getCountryKey(country) {
  for (let key in c) {
    // if (country === c[key]) {
    if (c[key].indexOf(country) !== -1) {
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
  let tz = iana[spacetime.now().tz]
    if (!country || typeof country !== 'string') {
      country = null
    }
    if (!country) {
      return getUnknownKey(tz);
    } else if (country) {
        return getCountryKey((country.toLowerCase()).trim())
    }
}

function weekStart(country = '') {
  let key = whatCountryKey(country)
    if (!key) { return weekStart() }console.log(key)
    for (let i in c) {
      if (i === key) {
        country = c[i]
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