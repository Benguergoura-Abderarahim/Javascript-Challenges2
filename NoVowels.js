let sentence = ["Hello World ! ", "You're a fullstack developper ?"];
console.log("The full sentences: ", sentence);
function novowels(string) {
  return string.replace(/[aeiouyAEIOUY]/gi, ""); // / /: start & end of regex, []: pattern matching any specified group of characters, g: global, with replace, it replace ALL matched elements instead of only 1st 1
  //i: ignore case, ensures all characters (vowels in our case) will be removed, either they're uppercase or not
}

sentenceWithNoVowels = sentence.map(novowels);
console.log("The sentences without vowels: ", sentenceWithNoVowels);
