function addFruit(fruits, newFruit) {
    fruits.push(newFruit);
    return fruits;
}

let fruitList = ["apple", "banana", "mango"];
console.log(addFruit(fruitList, "orange"));