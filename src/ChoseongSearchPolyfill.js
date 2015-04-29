var ChoseongList = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅌ', 'ㅋ', 'ㅍ', 'ㅎ'];

function getRegexpWord(word) {
    var startRegexpWord = '';
    var endRegexpWord = '';

    if (ChoseongList.indexOf(word) > -1) { // 초성만 들어왔을 경우
        var c = (ChoseongList.indexOf(word) * 21);

        startRegexpWord = String.fromCharCode((c * 28) + 0xAC00);
        endRegexpWord = String.fromCharCode(((c + 20) * 28) + 27 + 0xAC00);
    } else { // 완성된 글자일 경우
        var oSplitWord = SplitKor(word);

        startRegexpWord = word;
        endRegexpWord = String.fromCharCode((((oSplitWord.cho * 21) + oSplitWord.jung) * 28) + 27 + 0xAC00);
    }

    return ['[', startRegexpWord, '-', endRegexpWord, ']'].join('');
}

function SplitKor(str) {
    var cCode = str.charCodeAt(0) - 0xAC00;

    var jong = cCode % 28; // 종성
    var c = (cCode - jong) / 28;

    var jung = c % 21; // 중성
    var cho = (c - jung ) / 21; // 초성

    return {
        "cho": cho,
        "jung": jung,
        "jong": jong
    }
}

var SearchKor = function (input, isStartWord) {
    var wordLength = input.length;
    var regexp = '';

    if (isStartWord === true) {
        regexp = '^';
    }

    var word = '';
    for (var i = 0; i < wordLength; i++) {
        word = input[i];

        regexp += getRegexpWord(word);
    }

    return this.match(new RegExp(regexp, 'g'));
};

module.exports = SearchKor;
