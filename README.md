Number to Text
===
[![Build Status](https://travis-ci.org/garora/number2text.svg?branch=master)](https://travis-ci.org/garora/number2text)   [![Coverage Status](https://coveralls.io/repos/garora/number2text/badge.svg)](https://coveralls.io/r/garora/number2text)
> Provides the facility to convert number to text. Currently it supports:

* Numbers only (no currency support available) 
* Indian style for number to text


## How to install?

```shell
  npm install number2text
```

## How to use?

```js
  var numberToText = require('number2text');
      
  var text = numberToText(100);

  console.log('Converts 100 to ', text); //Converts 100 to One Hundred
```

## Executing tests

```shell
   npm test
```

## Contribution

Just need to take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

```shell
  git clone https://github.com/garora/number2text.git
  cd number2text
```


# Starting with pre-release installation

```shell
  npm install git://github.com/garora/number2text.git
  npm install git://github.com/garora/number2text.git#pre-releaseversion
```

## License

MIT

## Release notes

Currently ```number2text``` is in initial release. We're trying to make it more stable. Currently, it supports Indian standard to read numbers as words. Check for more details: [Change log](https://github.com/garora/number2text/blob/master/Changelog.md)


## Release history

* 0.0.0 Initial release
* 0.1.0 Initial release - Fixed few issues related to build
* 0.1.1 Few fixes
* 0.1.11 Typos
