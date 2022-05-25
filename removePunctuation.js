function removePunctuation(str) {
  return str.replace(/[\.,-\/#!$%\^&\*';:{}=\-_`~()@\+\?><\[\]\+]/g, "");
}

function removeSentenceEnds(str) {
  return str.replace(/[!.?]/g, "");
}

function keepApostrophes(str) {
  return str.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, "");
}

function runOnSentence(str) { // IN PROGRESS
  // replace punctuation with and, divide into array of words
  let stripped = str.replace(/[!.?]/g, " and");
  let words = stripped.split(" ");

  // console.log(words);
  // remove double "and"s
  for (let i = 0; i < words.length; i += 1) {
    if (words[i] === "and") {
      if (words[i - 1] === "and" || words[i - 1] === "") {
        words[i] = "";
      }
    }
  }
  
  // remove any ADDED last "and"
  str = str.split(" ");

  // console.log(words[str.length-1]);
  
  if(words[words.length-1] === "and") {
    console.log(words[words.length-1]);
    if(str[str.length-1] !== "and") {
      words[words.length-1] = "";
    }
  }
  
  return words.join(" ");
}

// keep apostrophes

// smart capitalize

// contractions


// -------------- TESTS ----------------- //
// console.log(removePunctuation("lissa's cool!new music"));
// console.log(removeSentenceEnds("this is really cool. i love it! do you think, or imagine, or hope, it's ok? no?!?!"));
// console.log(
//   runOnSentence(
//     "this is really cool. I love it! Do you think, or imagine, or hope, it's ok? No?!?!"
//   )
// );
console.log(keepApostrophes("!Lissa's +coo>l, wire+_"));