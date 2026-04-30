

//map() – creates a new array by transforming elements

// array.map(callback(element, index, array))

let cars = [
    { Brand: "Honda", Price: 800000},
    {Brand: "Toyata", Price: 1200000},
    {Brand: "Hyundai", Price: 600000}
];

let brands = cars.map(car => car.Brand);
console.log(brands);

let discounted = cars.map(car => ({...car, Price: car.Price * 0.9}));
console.log(discounted);