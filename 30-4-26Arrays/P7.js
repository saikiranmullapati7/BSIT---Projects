

//find() – returns first matching element

// array.find(callback(element, index, array))

let Company_cars = ["Maruti Suzuki", "Hyundai", "Tata Motors", "Mahindra", "Toyota", "Kia", "Honda", "Volkswagen & Skoda", "MG Motor India", "Renault & Nissan"];

console.log(Company_cars.find(car => car === "Kia"));
console.log(Company_cars.find(car => car === "Lamborghini"));
console.log(Company_cars.find(car => car.includes("Lamborghini")));