const { where } = require('sequelize');
const { Cars } = require('./models');

// Create
// Cars.bulkCreate([{ nama: 'test2', price: 12345, ukuran: 'medium', image: 'image' }, { nama: 'test3', price: 12345, ukuran: 'medium', image: 'image' }]).then((data) => console.log(data))

// Find All
// Cars.findAll().then((data) => console.log(data))

// Find with Where
// Cars.findAll({ where: { id: 1 } }).then((data) => console.log(data))

// Find By PK
// Cars.findByPk(1).then((data) => console.log(data))

// Update data
// Cars.update({ nama: 'test new' }, { where: { id: 1 } }).then((data) => console.log(data))

// Query Drop (Destroy)
// Cars.destroy({ where: { id: 3 } }).then((data) => console.log(data))

// Cars.destroy({ truncate: true, restrartIdentity: true }).then((data) => console.log(data))