
const express =require("express");
const app= express();   
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const path = require('path');
// const​ { ​check​ } ​=​​require​(​'express-validator'​);

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('views', './views'); // Seteo de la ubicación de la carpeta "views"

let mainRoutes = require("./Routes/mainRoutes");
let productRoutes = require("./Routes/productRoutes");


app.listen(3030, ()=> {
    console.log("Servidor prueba 3030")
});

app.use("/", mainRoutes);
app.use("/products", productRoutes);


// ************ DON'T TOUCH FROM HERE ************
// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error'); VERRRRRRRRRRRRRRRRRRRRRRRRRRRR
});

// ************ exports app - dont'touch ************
// ************ exports app - dont'touch ************
module.exports = app;