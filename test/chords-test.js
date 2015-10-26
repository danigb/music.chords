var vows = require('vows')
var assert = require('assert')
var chords = require('../')

vows.describe('chords').addBatch({
  'chords function': {
    'chord notes by name': function () {
      assert.deepEqual(chords('M69#11', 'G'), ['G', 'B', 'D', 'E', 'A', 'C#'])
      assert.deepEqual(chords('minor7', 'Bb2'), ['Bb2', 'Db3', 'F3', 'Ab3'])
    },
    'chord intervals': function () {
      assert.deepEqual(chords('sus4', false), ['1P', '4P', '5P'])
    },
    'partial applied': function () {
      var _7sus4 = chords('7sus4')
      assert.deepEqual(_7sus4('F#'), ['F#', 'B', 'C#', 'E'])
    },
    'odd cases': function () {
      assert.deepEqual(chords(), [])
      assert.deepEqual(chords(null, 'C'), [])
      assert.deepEqual(chords('7sus4', null), [null, null, null, null])
    }
  },
  'chord names': function () {
    assert.deepEqual(chords.names().length, 109)
    assert.deepEqual(chords.names(true).length, 227)
  },
  'find chord': function () {
    assert.deepEqual(chords.find('C E G B D'), 'M9')
    assert.deepEqual(chords.find('D F A C'), 'm7')
  }
}).export(module)
