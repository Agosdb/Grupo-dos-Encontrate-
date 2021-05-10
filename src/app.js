
const express = require("express");
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const session = require('express-session');
const cookies = require('cookie-parser');

const app = express();   

app.use(express.static('./public'));
app.set("view engine", "ejs");
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

// const userLoggedMiddleware = require ('../middleware/userLoggedMiddleware'); //DA ERROR


app.use(session({
  secret: "Reserved",
  resave: false,
  saveUninitialized: false,
}));

app.use(cookies());

// app.use(userLoggedMiddleware); //DA ERROR


let mainRoutes = require("./Routes/mainRoutes");
let productRoutes = require("./Routes/productRoutes");
let userRoutes = require("./Routes/userRoutes");

app.listen(3030, ()=> {
    console.log("Servidor prueba 3030")
});

app.use("/", mainRoutes);
app.use("/products", productRoutes);
app.use("/users", userRoutes); 

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
  // res.render('error'); 
});

module.exports = app;