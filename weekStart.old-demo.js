const weekStart = require('./src/input/weekStart.old');

  /** 
    currently you have to supply as an argument name of 
    the country. Further version will find out the country 
    itself by searching in iana.js.

    Name of the country can be in any case or incomplited.
    I saved all countries names in one object, where key is 
    day of start of the week and main function just finds
    out what is name of the key and returns it - it simplified
    original proof of concept.

    I created for myself a JSON with backup data - many arab
    countries started originally on Saturday, but according 
    to other sources they moved to start week on Sunday -
    hence I prefered Sunday.
    
    Currently if wrong argument is entered returns -1.
    When I will edit iana.js - to save size I won't write full
    country name, but use ISO 3166 3-letter expression
    (and change countries.js accordingly):
    https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
  */
console.log(`
First day of week in Canada is ${weekStart('canada')}
`);

console.log(`
First day of week in United States is ${weekStart('UniTed STATES')}
`);
console.log(`
First day of week in United Kingdom is ${weekStart('united King')}
`);
console.log(`
First day of week in United Arab Emirates is ${weekStart('aRaB eM')}
`);
