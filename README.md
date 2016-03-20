# progrescii

NodeJS easy graphical progress bars for the terminal/console.

## Getting Started

## Installation

```lang:bash
npm install progrescii
```

## Usage

```lang:javascript
'use strict';

const Progress = require('progrescii');
// Create a instance and render the progress bar
var p = Progress.create({
  size: 10,
  total: 100
});

// Update the total percentage
p.step(50);
// Output Example:
// Loading ▪▪▪▪▪▫▫▫▫▫ 50% in 0.00s
```

## Customize

```lang:javascript
'use strict';

const Progress = require('progrescii');
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
});

// Update the total percentage
p.step(20);
// Output Example:
Downloading █████░░░░░░░░░░░░░░░ 25% in 0.00s
```

## Global Customization Customize

To use the same configuration every time we create a instance
of the bar we can configure it as following:

```lang:javascript
'use strict';

const Progress = require('progrescii');
// Global configuration
Progress.config({
  template: 'Retrieving Information [:b] :p% in :ts',
  pending: ' ',
  complete: '=',
  size: 20
});
// Create and update instance
Progress
  .create({
    total: 11
  })
  .step(10);
// Output Example:
Retrieving Information [================== ] 91% in 0.51s
```
