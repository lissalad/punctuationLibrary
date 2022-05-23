
function removePunctuation(str) {
  return str.replace(/[\.,-\/#!$%\^&\*';:{}=\-_`~()@\+\?><\[\]\+]/g, '');
}

function removeSentenceEnds(str, runOn=false) {
  if(runOn) {
    return str.replace(/[!.?]/g, " and");
  }
  return str.replace(/[!.?]/g, "");
}

// run on sentence

// keep apostrophes

// smart capitalize

// contractions

// console.log(removePunctuation("lissa's cool!new music"));
console.log(removeSentenceEnds("this is really cool. i love it! do you think, or imagine, or hope, it's ok? no?!?!"));
console.log(removeSentenceEnds("this is really cool. I love it! Do you think, or imagine, or hope, it's ok? No?!?!", true));