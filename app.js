const express =require("express");

const app= express();   

const path =require("path");

const publicPath=path.resolve("public");

app.use(express.static(publicPath));

app.listen(3030, ()=> {
    console.log("Servidor prueba 3030")
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./views/index.html"));
});
app.get("/", (req, res) => {
    res.sendFile(path.resolve("./views/login.html"))
});
app.get("/", (req, res) => {
    res.sendFile(path.resolve("./views/productCar.html"))
});
app.get("/", (req, res) => {
    res.sendFile(path.resolve("./views/productDetail.html"))
});
app.get("/", (req, res) => {
    res.sendFile(path.resolve("./views/register.html"))
});
