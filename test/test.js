'use strict';
var should = require('should');
require('../')(String);

describe('초성검색 모듈 테스트 > ', function () {
  it('모듈이 초기화 되면 String Object 에 SearchKor 메소드가 있어야 한다.', function () {
    should.exist("test".SearchKor);
  });

  describe('한글 검색 테스트 > ', function() {
    it('초성 검색', function() {
      // given
      var text = '동해물과 백두산이 마르고 닳도록';

      // when
      var case1 = text.SearchKor('ㄷㅎㅁㄱ');
      var case2 = text.SearchKor('ㄱ ㅂ');
      var case3 = text.SearchKor('ㅂㄷㅅㅇ');

      // then
      case1.should.be.length(1);
      case2.should.be.length(1);
      case3.should.be.length(1);
    });

    it('한글', function() {
      // given
      var text = '동해물과 백두산이 마르고 닳도록 고';

      // when
      var case1 = text.SearchKor('해물');
      var case2 = text.SearchKor('두산');
      var case3 = text.SearchKor('고');
      var case4 = text.SearchKor('달');


      // then
      case1.should.be.length(1);
      case2.should.be.length(1);
      case3.should.be.length(2);
      case4.should.be.length(1);

    });

    it('한글 + 초성', function() {
      // given
      var text = '동해물과 백두산이 마르고 닳도록 고';

      // when
      var case1 = text.SearchKor('해물ㄱ');
      var case2 = text.SearchKor('ㅂ두ㅅㅇ');
      var case3 = text.SearchKor('ㅁㄹ고');
      var case4 = text.SearchKor('달ㄷㄹ');


      // then
      case1.should.be.length(1);
      case2.should.be.length(1);
      case3.should.be.length(1);
      case4.should.be.length(1);

    });

    it('한글 초성 + 영문', function() {
      // given
      var text = '대한민국korea';

      // when
      var case1 = text.SearchKor('ㅁㄱkorea');
      var case2 = text.SearchKor('민국ko');
      var case3 = text.SearchKor('korea');
      var case4 = text.SearchKor('or');

      // then
      case1.should.be.length(1);
      case2.should.be.length(1);
      case3.should.be.length(1);
      case4.should.be.length(1);

    });
  });

  describe('한글 검색 테스트(처음부터 일치 옵션) > ', function() {
    it('초성 검색', function() {
      // given
      var text = '동해물과 백두산이 마르고 닳도록';

      // when
      var case1 = text.SearchKor('ㄷㅎㅁㄱ', true);
      var case2 = text.SearchKor('ㄱ ㅂ', true);
      var case3 = text.SearchKor('ㅂㄷㅅㅇ', true);

      // then
      case1.should.be.length(1);
      (case2 === null).should.be.true;
      (case3 === null).should.be.true;
    });

    it('한글', function() {
      // given
      var text = '동해물과 백두산이 마르고 닳도록 고';

      // when
      var case1 = text.SearchKor('해물', true);
      var case2 = text.SearchKor('두산', true);
      var case3 = text.SearchKor('고', true);
      var case4 = text.SearchKor('달', true);


      // then
      (case1 === null).should.be.true;
      (case2 === null).should.be.true;
      (case3 === null).should.be.true;
      (case4 === null).should.be.true;

    });

    it('한글 + 초성', function() {
      // given
      var text = '동해물과 백두산이 마르고 닳도록 고';

      // when
      var case1 = text.SearchKor('해물ㄱ', true);
      var case2 = text.SearchKor('ㅂ두ㅅㅇ', true);
      var case3 = text.SearchKor('ㅁㄹ고', true);
      var case4 = text.SearchKor('달ㄷㄹ', true);


      // then
      (case1 === null).should.be.true;
      (case2 === null).should.be.true;
      (case3 === null).should.be.true;
      (case4 === null).should.be.true;

    });

    it('한글 초성 + 영문', function() {
      // given
      var text = '대한민국korea';

      // when
      var case1 = text.SearchKor('ㅁㄱkorea', true);
      var case2 = text.SearchKor('민국ko', true);
      var case3 = text.SearchKor('korea', true);
      var case4 = text.SearchKor('ㄷㅎㅁㄱk', true);

      // then
      (case1 === null).should.be.true;
      (case2 === null).should.be.true;
      (case3 === null).should.be.true;
      case4.should.be.length(1);

    });
  });
});
