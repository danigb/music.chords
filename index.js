'use strict'

var data = require('./dict/chords.json')
var aliases = require('./dict/aliases.json')
var harmonizer = require('music.harmonizer')
var pitchSet = require('music.pitchset')

/**
 * Get a chord from a name and a tonic
 *
 * This function always return an array, even if its empty. This function is
 * currified so it can be partially applied (see examples)
 *
 * @param {String} name - the chord name
 * @param {String|Array} tonic - the tonic of the chord (or false to get intervals)
 * @return {Array} a list of notes or intervals (or empty array if chord not found)
 *
 * @example
 * chords('7b5', 'C') // => ['C', 'E', 'Gb', 'Bb']
 * var M9 = chords('M9')
 * M9('C2') // => [ 'C2', 'E2', 'G2', 'B2', 'D3' ]
 */
function chords (name, tonic) {
  if (arguments.length === 1) return function (t) { return chords(name, t) }

  var intervals = data[name] || data[aliases[name]]
  return harmonizer(intervals, tonic)
}

/**
 * Get all available names
 *
 * @name names
 * @function
 * @param {Boolean} aliases - if true return aliases names
 * @return {Array} an array of chord names
 *
 */
chords.names = function (alias) {
  return alias ? Object.keys(data).concat(Object.keys(aliases)) : Object.keys(data)
}

var reverse = null
function buildReverse (data) {
  return Object.keys(data).reduce(function (rev, name) {
    rev[pitchSet.asBinary(data[name])] = name
    return rev
  }, {})
}

/**
 * Find a chord name by notes
 *
 * @name find
 * @function
 * @param {String|Array} notes - the chord notes
 * @return {String} the chord name
 */
chords.find = function (notes) {
  reverse = reverse || buildReverse(data)
  var binary = pitchSet.asBinary(notes)
  return reverse[binary]
}

if (typeof module === 'object' && module.exports) module.exports = chords
if (typeof window !== 'undefined') window.chords = chords
