Number to Text
===
[![Build Status](https://travis-ci.org/garora/number2text.svg?branch=master)](https://travis-ci.org/garora/number2text)   [![Coverage Status](https://coveralls.io/repos/garora/number2text/badge.svg)](https://coveralls.io/r/garora/number2text)
> Provides the facility to convert number to text. 

* Default type is Indian for non-currency 
* Default type is Indian Rupee for currency
* Indian style for number to text (Indian Rupee for currency)
* English style for number to text (US Dollar for currency)


## How to install?

```shell
  npm install number2text
```

## How to use?

```js
  var numberToText = require('number2text');
 ```

```js
     
  var textDefault = numberToText(100); //it converts to default type i.e. Indian

  console.log('Converts 1000000 to ', textDefault); //Converts 1000000 to Ten Lakh
```

```js
       
  var textIndian = numberToText(1000000,'Indian');

  console.log('Converts 1000000 to ', textIndian); //Converts 1000000 to Ten Lakh
```

```js
       
  var textEnglish = numberToText(1000000,'English');

  console.log('Converts 1000000 to ', textEnglish); //Converts 1000000 to One Million
```

```js
       
  //Large values

  var textIndian = numberToText(1000000000000);
  var textEnglish = numberToText(1000000000000,'English');

  console.log('Converts 1000000000000 to ', textIndian); //Converts 1000000000000 to One Lakh Crore
  console.log('Converts 1000000000000 to ', textEnglish); //Converts 1000000000000 to One Trillion
```

```js
       
  //For types other than Indian, English

  var text = numberToText(100,"Frensh");
  
  console.log('Retuns message: ', text); //Return message: Support for language: french is not available. Available languages are: indian,english
 ```

```js
       
  var defaultCurrency = numberToText(100.10,'',true);

  console.log('Converts 100.10 to ', defaultCurrency); //Converts 100.10 to One Hundred Rupee And Ten Paise Only
```

```js
       
  var defaultNonCurrency = numberToText(100.10);

  console.log('Converts 100.10 to ', defaultNonCurrency); //Converts 100.10 to One Hundred Point Ten 
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
* 1.0.0 New feature
* 1.0.1 Added large number support
* 1.1.0 Added currency support