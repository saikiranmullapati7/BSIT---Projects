

//filter() – returns elements that match a condition

// array.filter(callback(element, index, array))

let cars = [
    {Brand: "Honda", price: 800000, type: "Sedan"},
    {Brand: "Toyota", price: 1200000, type: "SUV"},
    {Brand: "Hyundai", price: 600000, type: "Sedan"},
    {Brand: "Mahindra", price: 1500000, type: "SUV"}
];

let suv = cars.filter(car => car.type === "SUV");
console.log(suv);

let affordable  = cars.filter(car => car.price < 1000000);
console.log(affordable);

