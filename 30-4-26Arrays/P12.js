
//flatMap() – maps and flattens in one step

//array.flatMap(callback(element, index, array))

let numbers = [1,2,3,4];

console.log(numbers.flatMap(n => [n, n * 2]));
