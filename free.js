function checkFreezing(temp) {
    if (temp <= 0) {
        return "Freezing temperature";
    } else {
        return "Above freezing";
    }
}

console.log(checkFreezing(40));