const express =require("express");
const app= express();   
const path =require("path");
const publicPath=path.resolve("public");
app.listen(3030, ()=> console.log("Servidor prueba 3030"));
app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./views/home.html"));
});
