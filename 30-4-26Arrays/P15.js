
//reduceRight() – reduces from right to left

let Company_cars = ["Maruti Suzuki", "Hyundai", "Tata Motors", "Mahindra", "Toyota", "Kia", "Honda", "Volkswagen & Skoda", "MG Motor India", "Renault & Nissan"];

let results = Company_cars.reduceRight((acc, car) => acc + " | " + car);
console.log(results);