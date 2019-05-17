const weekStart = require('./src/input/weekStart');
const spacetime = require('./src/index')
const iana = require('./zonefile/iana')
  /** 
		In this version country will be found out by searching 
		in iana.js. I added to iana.js one optional property
		country containing name of the country.

		I saved all country names in one object, where key is 
    start day of the week and main function just finds
    out what is name of the key and returns it - it simplified
    original proof of concept.

    I created for myself a JSON with backup data - many arab
    countries started week originally on Saturday, but according 
    to other sources they moved to start week on Sunday -
    hence I prefered Sunday.
    
		Currently if wrong or missing argument is entered returns -1.
		I will keep working on editing iana.js. For testing I edited 
		only my timezone. You have to edit yours if you want to verify
		this function works.
  */

const country = (iana[spacetime().tz].country).
	charAt(0).toUpperCase() + (iana[spacetime().tz].
	country).slice(1)

console.log(`
First day of week in ${country} is ${weekStart()}
`)