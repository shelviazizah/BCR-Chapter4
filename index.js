const express = require("express");
const handler = require("./handler");
const middleware = require("./middleware");
const path = require('path');
const flash = require('express-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const uploadOnMemory = require("./uploadOnMemory");
const multer = require('multer')

const storage = multer.memoryStorage();

module.exports = multer({ storage })

const port = process.env.PORT || 8000;
const app = express();

const PUBLIC_DIRECTORY = path.join(__dirname, "public")

// View Engine
app.set("view engine", "ejs")

// Pasang JSON Parser middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }))

app.use(cookieParser('keyboard cat'));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());

app.use(express.static(PUBLIC_DIRECTORY))

// Router
app.get("/cars/create", handler.handleCreateCarForm);
app.post("/cars/create", handler.handleCreateCarForm);

app.get("/cars/:id/update", middleware.setCar, handler.handleUpdateCarForm);
app.post("/:id/update", middleware.setCar, uploadOnMemory.single('image'), handler.handleUpdateCar);

app.get("/", handler.handleListCars);
app.get("/cars", handler.handleListCars);
app.post("/cars", uploadOnMemory.single('image'), handler.handleCreateCar);
app.get("/cars/:id", middleware.setCar, handler.handleGetCar);

app.get("/cars/:id/delete", handler.handleDeleteCar);

app.put("/cars/:id", middleware.setCar, handler.handleUpdateCar);
app.delete("/cars/:id", middleware.setCar, handler.handleDeleteCar);

app.listen(port, () => console.log(`Listening on http://127.0.0.1:${port}`));

app.get("/", (req, res) => {
    res.render("index", {
        nama: req.query.nama || "Apaaa",
    })
})
