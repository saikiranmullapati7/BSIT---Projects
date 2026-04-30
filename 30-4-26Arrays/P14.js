

//reduce() – reduces array to a single value

// array.reduce(callback(accumulator, element, index, array), initialValue)

let Company_cars = ["Maruti Suzuki", "Hyundai", "Tata Motors", "Mahindra", "Toyota", "Kia", "Honda", "Volkswagen & Skoda", "MG Motor India", "Renault & Nissan"];


let allBrands = Company_cars.reduce((acc, car) => acc + " | " + car);
console.log(allBrands);

let totalChar = Company_cars.reduce((acc, car) => acc + car.length,0);
console.log(totalChar);

let Longest = Company_cars.reduce((acc, car) => acc.length > car.length ? car : acc);
console.log(Longest);


let cars = [
    { brand: "Honda", price: 800000 },
    { brand: "Toyota", price: 1200000 },
    { brand: "Hyundai", price: 600000 },
    { brand: "Mahindra", price: 1500000 }
];

let totalPrice = cars.reduce((acc, car) => acc + car.price, 0);
console.log(totalPrice);

let grouped = cars.reduce((acc, car) => {
    let key = car.price >= 1000000 ? "Expensive" : "affordable";
    acc[key] = acc[key] || [];
    acc[key].push(car.brand);
    return acc;
}, {});
console.log(grouped);