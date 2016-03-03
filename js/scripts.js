var pigLatin = function(englishWord) {
  var splitAt = indexOfFirstVowel(englishWord);
  return englishWord.slice(splitAt) + englishWord.slice(0, splitAt) + 'ay';
};

var indexOfFirstVowel = function(word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var letters = word.split("");

  for (var i = 0; i < letters.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (letters[i] === vowels[j]) {
        return i;
      }
    }
  }
};

$(document).ready(function() {
  $("form#pigForm").submit(function(event) {
    var englishWord = $("input#english").val();

    var translation = pigLatin(englishWord);

    alert(translation);

    event.preventDefault();
  });
});
