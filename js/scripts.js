var consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y','z']
var vowels = ['a', 'e','i','o','u']

function pigLatin(str) {
  for (var i = 0; i < vowels.length; i += 1) {
    if (str[0] == vowels[i]) {
      return str + "way";
    } else {
      return str;
    }

  }
}





$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var sentence = $("#ans1").val();
    var result = pigLatin(sentence);

    $("ul").text(result);

  });
});














// for (var j = 0; j < str.length; j++) {
//   if (str[j] == vowels[i]) {
//
//   } else {
//
//   }
// }





// var sentence = $("#ans1").val().split(" ");
// console.log(sentence);
//
// if (sentence.includes(vowels)) {
//   alert("hello")
// } else {
//
// }
