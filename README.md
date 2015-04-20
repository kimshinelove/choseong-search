#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> 정규식을 통한 한글 초성 검색 모듈


## Install

```sh
$ npm install --save choseong-search
```


## Usage

```js
require('../')(String);

var text = '동해물과 백두산이 마르고 닳도록';

var case1 = text.SearchKor('ㄷㅎㅁㄱ'); // 동해물과
var case2 = text.SearchKor('ㄱ ㅂ'); // 과 백
var case3 = text.SearchKor('ㅂㄷㅅㅇ'); // 백두산이

var case1 = text.SearchKor('해물'); // 해물
var case2 = text.SearchKor('두산'); // 두산
var case3 = text.SearchKor('고'); // 고
var case4 = text.SearchKor('달'); // 닳

var case1 = text.SearchKor('해물ㄱ'); // 해물과
var case2 = text.SearchKor('ㅂ두ㅅㅇ'); // 백두산이
var case3 = text.SearchKor('ㅁㄹ고'); // 마르고
var case4 = text.SearchKor('달ㄷㄹ'); // 닳도록

-----
var text = '대한민국korea';

var case1 = text.SearchKor('ㅁㄱkorea'); // 민국korea
var case2 = text.SearchKor('민국ko'); // 민구ko
var case3 = text.SearchKor('korea'); // korea
var case4 = text.SearchKor('or'); // or
```


## License

MIT © [JiTae, Kim]()


[npm-image]: https://badge.fury.io/js/choseong-search.svg
[npm-url]: https://npmjs.org/package/choseong-search
[travis-image]: https://travis-ci.org/kimshinelove/choseong-search.svg?branch=master
[travis-url]: https://travis-ci.org/kimshinelove/choseong-search
[daviddm-image]: https://david-dm.org/kimshinelove/choseong-search.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/kimshinelove/choseong-search
