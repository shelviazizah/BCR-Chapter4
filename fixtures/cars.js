const faker = require("faker");
const fs = require("fs");
const path = require("path");

const outpath = path.join(__dirname, "cars.json");
const cars = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 25; i++) {
  cars.push({
    id: i + 1,
    nama: faker.vehicle.manufacturer(),
    price: getRandomInt(0, 1000000),
    ukuran: faker.vehicle.type(Small, Medium, Large),
  });
}

fs.writeFileSync(outpath, JSON.stringify(cars, null, 2));
