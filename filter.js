let words = ["apple", "banana", "grapes", "kiwi", "orange"];

let longWords = words.filter(function(word) {
    return word.length > 2;
});

console.log(longWords);