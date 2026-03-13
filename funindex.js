function findIndex(words, targetWord) {
    return words.indexOf(targetWord);
}

let wordList = ["html", "css", "javascript", "react"];
console.log(findIndex(wordList, "javascript"));