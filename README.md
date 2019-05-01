<div align="center">
  <div>
    <h2>spacetime-week</h2>
  </div>
  <div>
    calculate the start of a week
  </div>
  <a href="https://npmjs.org/package/spacetime-week">
    <img src="https://img.shields.io/npm/v/spacetime-week.svg?style=flat-square" />
  </a>
  <a href="https://unpkg.com/spacetime/builds/spacetime-week.min.js">
    <img src="https://badge-size.herokuapp.com/spencermountain/spacetime-week/master/builds/spacetime-week.min.js" />
  </a>
  <div>
    <sup>
      By <a href="https://github.com/MartinSpd">Martin Spodniak</a> and <a href="https://github.com/spencermountain">Spencer Kelly</a>
    </sup>
  </div>
  <hr/>
</div>

The start of a week varies officially in different countries.

This is a library to help understand week-starts/ends, by country or timezone.

It does some opinionated guesswork to determine the most appropriate week-start, when a timezone is given.

It returns a javascript-ordered day number (0=Sunday).

It is built for use in/with the [spacetime](https://github.com/spencermountain/spacetime) library

`npm i spacetime-week`

```js
const spacetimeWeek = require('spacetime-week')
const start = spacetimeWeek('canada')
// 0
spacetimeWeek('china')
// 0
spacetimeWeek('russia')
// 1
```

### Some Info:

- [First Day of the Week in Different Countries](http://chartsbin.com/view/41671)
- [CLDR - Unicode Common Locale Data Repository](http://cldr.unicode.org/)

work-in-progress

MIT
