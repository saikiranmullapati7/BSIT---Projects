

//flat() – flattens nested arrays

// array.flat(depth)

let arr1 = [1,2[3,4[5,6[7,8,9]]]];

console.log(arr1.flat());
console.log(arr1.flat(2));
console.log(arr1.flat(Infinity));


let Company_cars = ["Maruti Suzuki", "Hyundai", ["Tata", "Mahindra"],"Toyota",["Kia", "Honda", ["MG Motors India"]]];

//console.log(Company_cars.flat());

console.log(Company_cars.flat(2));

//console.log(Company_cars.flat(Infinity));