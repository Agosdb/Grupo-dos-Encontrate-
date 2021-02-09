const express =require("express");
const app= express();   
app.use(express.static("public"));

app.listen(3030, ()=> {
    console.log("Servidor prueba 3030")
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "./views/index.html")
});
// app.post('/', (req,res)=>{
//     res.send(req.body);
// });
app.get("/login", (req, res) => {
    res.sendFile(__dirname + "./views/login.html")
});
app.get("/productCar", (req, res) => {
    res.sendFile(__dirname + "./views/productCar.html")
});
app.get("/productDetail", (req, res) => {
    res.sendFile(__dirname +"./views/productDetail.html")
})
app.get("/register", (req, res) => {
    res.sendFile(__dirname + "./views/register.html")
});
