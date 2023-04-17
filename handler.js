// const Car = require("./car")
const { Cars } = require('./models');
const cloudinary = require("./cloudinary");

async function handleCreateCar(req, res) {
  console.log('req.body', req.body)

  const fileBase64 = req.file.buffer.toString("base64");
  const file = `data:${req.file.mimetype};base64,${fileBase64}`;

  cloudinary.uploader.upload(file, async function (err, result) {
    if (!!err) {
      console.log(err);
      return res.status(400).json({
        message: "Gagal upload file!",
      });
    }

    const { nama, price, ukuran } = req.body
    const car = await Cars.create({ nama, price, ukuran, image: result.url });
    req.flash('info', 'Car Successfully Created');
    res.redirect("/cars");
  });
}

function handleCreateCarForm(req, res) {
  res.render('create');
}

async function handleUpdateCarForm(req, res) {
  const car = req.car;

  res.render('update', { car });
}

async function handleListCars(req, res) {
  const cars = await Cars.findAll();

  res.render('index', { cars });
}

async function handleGetCar(req, res) {
  const id = req.params.id;
  const car = await Cars.findByPk(id);

  res.status(200).json(car);
}

async function handleUpdateCar(req, res) {
  const id = req.params.id;
  await Cars.update(req.body, { where: { id } })

  req.flash('update', 'Car Successfully Updated');
  res.redirect("/cars");
}

async function handleDeleteCar(req, res) {
  const id = req.params.id;

  await Cars.destroy({ where: { id } });
  const car = req.car;

  res.redirect("/cars");
}

module.exports = {
  handleCreateCar,
  handleListCars,
  handleGetCar,
  handleUpdateCar,
  handleDeleteCar,
  handleCreateCarForm,
  handleUpdateCarForm
};
