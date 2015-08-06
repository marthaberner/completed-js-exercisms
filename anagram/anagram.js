"use strict";
module.exports = function(words) {
  return {
    matches: matches.bind(this, words)
  }
}

function matches(word, words){
  words = Array.isArray(words) ? words : [].slice.call(arguments, 1);
  return words.filter(function (w) {
    return (sortify(word) === sortify(w)) && notSame(word, w);
  });
}

function sortify(word) {
  word = word.toLowerCase();
  return word.split("").sort().join("");
}

function notSame(w1, w2) {
  return w1.toLowerCase() !== w2.toLowerCase();
}
