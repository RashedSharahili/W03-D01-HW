"use strict";
function honk(car) {
    console.log(`Hello Car ${car.model}!`);
}
let car1 = {
    make: "Toyota",
    model: "Corolla",
    year: 2012
};
let car2 = {
    make: "Hundai",
    model: "Elentera",
    year: 2016
};
let car3 = {
    make: "Nissan",
    model: "Altima",
    year: 2011,
};
honk(car1);
honk(car2);
honk(car3);
let cars = [];
cars.push(car1);
cars.push(car2);
cars.push(car3);
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
honk(car1);
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i].year);
}
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i].model);
}
