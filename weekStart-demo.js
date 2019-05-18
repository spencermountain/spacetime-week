const weekStart = require('./src/input/weekStart');
  /** 
		In this version country will be found out by searching 
		in iana.js. I added to iana.js one optional property
		cntry containing key pointing to country.

		I saved all country names in one JSON object c.
		In other JSON are keys to countries stored in an array, 
		where key is start day of the week and main function just 
		finds out what is name of the key and returns it - it 
		simplified original proof of concept.
    
		Currently if wrong or missing argument is entered returns 
		JSON for current time zone.

		I commented out first examples, because currently they 
		would fail.
  */


// console.log(`
// First day of week in ${weekStart().country} is ${weekStart().day}
// `)

console.log('#1: ', weekStart());
console.log('#2: ', weekStart(12));
console.log('#3: ', weekStart(null));
console.log('#4: ', weekStart(''));
console.log('#5: ', weekStart(undefined));
console.log('#6: ', weekStart('abc'));
// all returns results for current tz, f.e. { day: 'sunday', country: 'canada' }

console.log('#7: ', weekStart('slovakia'));
// tz: europe/bratislava
// { day: 'monday', country: 'slovakia' }

console.log('#8: ', weekStart('iran'));
//tz: asia/tehran
// { day: 'saturday', country: 'iran' }

console.log('#9: ', weekStart('canAda'));
//tz: f.e. america/montreal
// { day: 'sunday', country: 'canada' }

console.log('#10: ', weekStart('lize'));
// tz: america/belize
// { day: 'monday', country: 'belize' }

console.log('#11: ', weekStart('el salvador'));
// tz: america/el_salvador
// { day: 'monday', country: 'el salvador' }

console.log('#12: ', weekStart('zulu'));
// tz: etc/zulu
// { day: 'monday', location: 'zulu' }

console.log('#13: ', weekStart('gmt'));
// tz: f.e. etc/gmt
// { day: 'monday', location: 'gmt' }

console.log('#14: ', weekStart('antarctica'));
// tz: f.e. antarctica/south_pole
// { day: 'monday', location: 'antarctica' }

console.log('#15: ', weekStart('arctic'));
// tz: f.e. arctic/longyearbyen
// { day: 'monday', location: 'arctic' }

