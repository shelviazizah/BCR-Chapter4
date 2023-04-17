# RESTful API

File [`index.js`](./index.js) adalah sebuah file yang berisi implementasi dari
HTTP server yang menerapkan kaidah RESTful API yang ditulis menggunakan Express.js.

Untuk menjalankan HTTP server tersebut, cukup jalankan perintah berikut di dalam
terminal: nodemon index.js

# Route :
Create :
app.get("/cars/create", handler.handleCreateCarForm);
app.post("/cars/create", handler.handleCreateCarForm);

Update :
app.get("/cars/:id/update", middleware.setCar, handler.handleUpdateCarForm);
app.post("/:id/update", middleware.setCar, uploadOnMemory.single('image'), handler.handleUpdateCar);

List Car :
app.get("/", handler.handleListCars);
app.get("/cars", handler.handleListCars);
app.post("/cars", uploadOnMemory.single('image'), handler.handleCreateCar);

Select By Id :
app.get("/cars/:id", middleware.setCar, handler.handleGetCar);

Delete :
app.get("/cars/:id/delete", handler.handleDeleteCar);

# ERD Cars
Terdapat 1 tabel yang digunakan dalam database yaitu tabel Cars.
Di dalam tabel Cars terdapat id, nama, price, ukuran dan image
![ERD Image](./public/images/ERD%20Cars.png)

# Database
Di project kali ini kita menggunakan database NoSQL yaitu Postgres.
Nama database yang digunakan yaitu db_cars.
untuk menjalankan migrasi database kita dapat menggunakan perintah :
sequelize db:migrate di terminal  
