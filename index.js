'use strict';

var SearchKor = require('./src/ChoseongSearchPolyfill');


module.exports = function (String) {
  if (String.prototype.SearchKor) {
    console.error('exists SearchKor method in String Object.');
  } else {
    String.prototype.SearchKor = SearchKor;
  }

  return String;
};
