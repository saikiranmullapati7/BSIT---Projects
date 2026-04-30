
//some() – checks if any element passes condition

let Company_cars = ["Maruti Suzuki", "Hyundai", "Tata Motors", "Mahindra", "Toyota", "Kia", "Honda", "Volkswagen & Skoda", "MG Motor India", "Renault & Nissan"];


let hasTata = Company_cars.some(car => car.includes("Tata"));
console.log(hasTata);

let hasBMW = Company_cars.some(car => car.includes("BMW"));
console.log(hasBMW);