const countries = {
  canada: 0,
  china: 0,
  russia: 1
}

//go crazy here!
const weekStart = function(input) {
  input = input.toLowerCase().trim()

  // match a country name
  if (countries.hasOwnProperty(input)) {
    return countries[input]
  }
  //match a country from iana timezone
  let split = input.split('/')
  if (split.length === 2) {
    if (countries.hasOwnProperty(split[0])) {
      return countries[split[0]]
    }
  }

  return null //or a fallback?
}

module.exports = weekStart
