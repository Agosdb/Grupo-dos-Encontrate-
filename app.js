const express =require("express");
const app= express();   
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

let mainRoutes = require("./Routes/mainRoutes");
let productRoutes = require("./Routes/productRoutes");


app.listen(3030, ()=> {
    console.log("Servidor prueba 3030")
});

app.use("/", mainRoutes);
app.use("/", productRoutes);



// ************ exports app - dont'touch ************
module.exports = app;