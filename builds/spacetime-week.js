/* spacetime-week v0.0.1
   github.com/spencermountain/spacetime-week
   MIT
*/

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.spacetimeWeek = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
"use strict";

var countries = {
  canada: 0,
  china: 0,
  russia: 1 //go crazy here!

};

var weekStart = function weekStart(input) {
  input = input.toLowerCase().trim(); // match a country name

  if (countries.hasOwnProperty(input)) {
    return countries[input];
  } //match a country from iana timezone


  var split = input.split('/');

  if (split.length === 2) {
    if (countries.hasOwnProperty(split[0])) {
      return countries[split[0]];
    }
  }

  return null; //or a fallback?
};

module.exports = weekStart;

},{}]},{},[1])(1)
});
