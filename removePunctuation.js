function removePunctuation(str) {
  return str.replace(/[\.,-\/#!$%\^&\*';:{}=\-_`~()@\+\?><\[\]\+]/g, "");
}

function removeSentenceEnds(str) {
  return str.replace(/[!.?]/g, "");
}

function runOnSentence(str) {
  str = str.replace(/[!.?]/g, " and");
  let words = str.split(" ");
  // console.log(words);

  for (let i = 0; i < words.length; i += 1) {
    if (words[i] === "and") {
      if (words[i - 1] === "and" || words[i - 1] === "") {
        words[i] = "";
      }
    }
  }

  return words.join(" ");
}
// keep apostrophes

// smart capitalize

// contractions

// console.log(removePunctuation("lissa's cool!new music"));
// console.log(removeSentenceEnds("this is really cool. i love it! do you think, or imagine, or hope, it's ok? no?!?!"));
console.log(
  runOnSentence(
    "this is really cool. I love it! Do you think, or imagine, or hope, it's ok? No?!?!"
  )
);
