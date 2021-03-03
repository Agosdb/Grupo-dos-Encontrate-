const express =require("express");
const app= express();   
app.use(express.static("public"));
app.set("view engine", "ejs");

let mainRoutes = require("./Routes/mainRoutes");

app.listen(3030, ()=> {
    console.log("Servidor prueba 3030")
});

app.use("/", mainRoutes);

/*/
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.ejs")
});
app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/views/login.ejs")
});
app.get("/productCar", (req, res) => {
    res.sendFile(__dirname + "/views/productCar.ejs")
});
app.get("/productDetail", (req, res) => {
    res.sendFile(__dirname +"/views/productDetail.ejs")
})
app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/views/register.ejs")
});
app.get("/registerAdministrator", (req, res) => {
    res.sendFile(__dirname + "/views/registerAdministrator.ejs")
});
app.get("/productEdition", (req, res) => {
    res.sendFile(__dirname + "/views/productEdition.ejs")
});*/