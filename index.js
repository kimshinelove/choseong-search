'use strict';

var ChoseongList = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅌ', 'ㅋ', 'ㅍ', 'ㅎ'];

function getRegexpWord(word) {
  var startRegexpWord = '';
  var endRegexpWord = '';
  var oSplitWord = SplitKor(word);

  if (ChoseongList.indexOf(word) > -1) { // 초성만 들어왔을 경우
    startRegexpWord = String.fromCharCode((((ChoseongList.indexOf(word) * 21) + 0) * 28) + 0xAC00);
    endRegexpWord = String.fromCharCode((((ChoseongList.indexOf(word) * 21) + 20) * 28) + 27 + 0xAC00);
  } else { // 완성된 글자일 경우
    startRegexpWord = word;
    endRegexpWord = String.fromCharCode((((oSplitWord.cho * 21) + oSplitWord.jung) * 28) + 27 + 0xAC00);
  }

  var regexp = ['[', startRegexpWord, '-', endRegexpWord, ']'].join('');

  return regexp;
}

function SplitKor(str) {
  var cCode = str.charCodeAt(0) - 0xAC00;

  var jong = cCode % 28; // 종성
  var jung = ((cCode - jong) / 28 ) % 21 // 중성
  var cho = (((cCode - jong) / 28 ) - jung ) / 21 // 초성

  return {
    cho: cho,
    jung: jung,
    jong: jong
  }
}

var SearchKor = function (input, isStartWord) {
  console.time('start search choseong...');
  var wordLength = input.length;
  var regexp = '';

  if (isStartWord === true) {
    regexp = '^';
  }

  var word = '';
  for (var i = 0; i < wordLength; i++) {
    word = input.charAt(i);

    regexp += getRegexpWord(word);
  }

  var result = this.match(new RegExp(regexp, 'g'));

  console.timeEnd('start search choseong...');

  return result;
};


module.exports = function (String) {
  if (String.prototype.SearchKor) {
    console.error('exists SearchKor method in String Object.');
  } else {
    String.prototype.SearchKor = SearchKor;
  }

  return String;
};
