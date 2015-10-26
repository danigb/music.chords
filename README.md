# music.chords

[![Build Status](https://travis-ci.org/danigb/music.chords.svg?branch=master)](https://travis-ci.org/danigb/music.chords)
[![Code Climate](https://codeclimate.com/github/danigb/music.chords/badges/gpa.svg)](https://codeclimate.com/github/danigb/music.chords)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/music.chords.svg)](https://www.npmjs.com/package/music.chords)
[![license](https://img.shields.io/npm/l/music.chords.svg)](https://www.npmjs.com/package/music.chords)
[![distribution](https://img.shields.io/badge/dist-12.7kb-blue.svg)](https://raw.githubusercontent.com/danigb/music.chords/master/dist/chords.min.js)
[![music.kit](https://img.shields.io/badge/music-kit-yellow.svg)](https://www.npmjs.com/package/music.kit)

A dictionary of chords:

```js
var chords = require('music.chords')
chords('Maj7b5', 'C')
```

This is part of [music.kit](https://www.npmjs.com/package/music.kit)

## Features

- Build chords from names
- Get chord intervals
- Get all available chord names
- Find chord name by notes

## Install

Via npm: `npm i --save music.chords` or grab the [browser ready file](https://raw.githubusercontent.com/danigb/music.chords/master/dist/music.chords.min.js) (12.7kb minified) from dist folder.

## Usage

#### Get a chord from a name

The simplest usage is creating a chord from a name:

```js
chords('Maj7', 'F') // => ['F', 'A', 'C', 'E']
chords('', 'Gb') // =>
```

The `chords` function can be partially applied:

```js
var chord7b9s11 = chords('7b9#11')
chord7bs11('e') // => [ 'E', 'G#', 'B', 'D', 'F', 'A#' ]
```

#### Get chord intervals

You can get chord intervals by passing `false` as tonic:

```js
chord7bs11(false) // => [ '1P', '3M', '5P', '7m', '9m', '11A' ]
```

#### Get available chord names

Use the `names` function to get chord names. Passing `true` as first argument return chord aliases names too:

```js
chords.names() // => ['M', ...] (109 names)
chords.names(true) // => ['M', ...] (227 names)
```

#### Find chord name

The `find` function get the chord name from a list of notes. All the notes of the chord must be inside the list and the first note of the list is considered the tonic:

```js
chords.find('c g a d2 e G5') // => 'M69'
```

#### More...

Read the [generated documentation](https://github.com/danigb/music.chords/blob/master/API.md) or take a look to [music.kit](https://github.com/danigb/music.kit)

## License

MIT License
