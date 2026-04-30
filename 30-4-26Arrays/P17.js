

//every() – checks if all elements pass condition

let Company_cars = ["Maruti Suzuki", "Hyundai", "Tata Motors", "Mahindra", "Toyota", "Kia", "Honda", "Volkswagen & Skoda", "MG Motor India", "Renault & Nissan"];


let allLong = Company_cars.every(car => car.length > 3);
console.log(allLong); 

let allTata = Company_cars.every(car => car.includes("Tata"));
console.log(allTata); 