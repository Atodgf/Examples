const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
let result = [];
function currentSums(numbers) {
    numbers.reduce((sum, current, i) => {
    return result[i] = sum + current;
 }, 0);
console.log(result);
}
currentSums(numbers)