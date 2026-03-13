let prices = [10, 20, 30, 40];

let priceTags = prices.map(function(price) {
    return "$" + price;
});

console.log(priceTags);