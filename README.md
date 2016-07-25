# progrescii

[![npm](https://img.shields.io/npm/v/progrescii.svg?style=flat-square)](https://www.npmjs.com/package/progrescii)
[![GitHub license](https://img.shields.io/github/license/willyelm/progrescii.svg?style=flat-square)](https://github.com/willyelm/progrescii)

NodeJS easy graphical progress bars for the terminal/console.

## Getting Started

## Installation

```bash
npm install progrescii
```

## Usage

Simple instance creation with default style:

```javascript
'use strict'
const Progress = require('progrescii')
// Create a instance and render the progress bar
var p = Progress.create({
  total: 100
})

// Add to the total percentage so far
p.step(50)

// Set the total percentage so far
p.set(75)

```

Output Example:

```bash
Loading ▪▪▪▪▪▪▪▪▪▪▫▫▫▫▫▫▫▫▫▫ 50% in 0.51s
```

## Customize

Configure template size and style:

```javascript
'use strict'
const Progress = require('progrescii')
var p = Progress.create({
  size: 20,
  total: 40,
  pending: '░',
  complete: '█',
  template: 'Downloading :b :p% in :ts'
  // Template Text tokens:
  //:b progress bar text
  //:p percentage Number
  //:t execution time
})

// Update the total percentage
p.step(20)
```

Output Example:

```bash
Downloading █████░░░░░░░░░░░░░░░ 25% in 0.00s
```

## Global Customization

To use the same configuration every time we create a instance
of the bar we can configure it as following:

```javascript
'use strict'
const Progress = require('progrescii')
// Global configuration
Progress.config({
  template: 'Retrieving Information [:b] :p% in :ts',
  pending: ' ',
  complete: '=',
  size: 20
})
// Create and update instance
Progress
  .create({
    total: 11
  })
  .step(10);
```

Output Example:

```bash
Retrieving Information [================== ] 91% in 0.51s
```
