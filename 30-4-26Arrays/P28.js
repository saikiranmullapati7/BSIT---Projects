
//entries() – returns key/value iterator

let Company_cars = ["Maruti Suzuki", "Hyundai", "Tata Motors", "Mahindra", "Toyota", "Kia", "Honda", "Volkswagen & Skoda", "MG Motor India", "Renault & Nissan"];


for(let [key, val] of Company_cars.entries()) {
    console.log(key,val);
}