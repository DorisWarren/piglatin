// var consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y','z']
var vowels = ['a', 'e','i','o','u']

// function pigLatin(str) {
//   for (var i = 0; i < vowels.length; i += 1) {
//     if (str[0] == vowels[i]) {
//       return str + "way";
//     }
//   }
//     if (str[1] !== vowels[i]) {
//       return str.slice(2) + str.slice(0,2) + "ay"
//     }
//   }
//   if (str[1] == vowels[i]) {
//     return str.slice(1) + str.slice(0,1) + "ay"
//   }

function vowel(word) {
  if (vowels.includes(word[0])) {
    return word + "way"
  }
}

function consonant(word) {
  for (var i = 0;i < word.length;) {
    if(!vowels.includes(word[i])) {
      i += 1;
    } else {
      var cons = word.slice(0, [i]);
      var sliceWord = word.slice(i, word.length);
      var newWord = sliceWord + cons + "ay"
      return newWord
    }
  }
}

function qu(word) {
  var qu = word.slice(0,2)
  var sliceWord = word.slice(2, word.length)
  var newWord = sliceWord + qu + "ay"
  return newWord
}

// function pigLatin(word) {
//   vowel(word);
//   consonant(word);
// }




$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var sentence = $("#ans1").val();
    var result = consonant(sentence);
    var result2 = vowel(sentence)
    var result3 = qu(sentence)
    $("ul").text(result3, result, result2);

  });
});
