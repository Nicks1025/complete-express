// const express = require("express");
// const app = express();      //express application

// app.get("/",(req,res) => {
//     res.send("Express Application");
// })

// app.listen(3000,() => console.log("server started on port 3000"))




//middleware

// const express = require("express");
// const app = express();

// const myLogger = function(req,res,next) {
//     console.log("LOGGED");
//     next();
// }

// var time = '';
// const requestTime = function(req,res,next) {
//     // time = Date.now();
//     req.requestTime = Date.now();
//     console.log("Request Time")
//     next();
// }


// app.use(myLogger);
// app.use(requestTime);

// app.get("/",(req,res) => {
//     res.send(`Current Time : ${time}`);
// })

// app.listen(3000,() => console.log("server started on port 3000"))




// // Static Files

    const express = require("express");
    const app = express();
    const path = require("path");

    const pathpublic = path.resolve(__dirname,'public');

    app.use(express.static('public'));
    app.use('/public', express.static('static'));
    app.use(pathpublic,express.static('static'));

    app.get("/",function(req,res) {
        res.send('Static Files');
    })

    app.listen(3000, () => "server started on port 3000");






// // Routing in express
// const express = require("express")
// const app = express();
// const path = require("path");

// const PORT = 3000;

// const data = {
//     id : 1,
//     name : "India"
// }

// app.get("/", (req,res) => {
//     res.end("Welcome To My HomePage");
// })

// app.get("/about", (req,res) => {
//     res.send("Welcome To My About Page");
// })


// const pathpublic = path.resolve(__dirname,'public');
// app.get("/weather", (req,res) => {
//     // res.json(data)
//     // res.sendFile(`${pathpublic}/index.html`)
//     // res.send(data);
// })

// app.listen(PORT, ()=> {console.log(`server started on port ${PORT}`)})









// // Views / Templates in express
// // install pug template
// // app.set(template engine name, template)
// const express = require("express")
// const app = express();

// const PORT = 3000;

// app.set("view engine", "pug")

// app.get("/",(req,res) => {
//     res.render("index",{title : "Express View Engine", h1 : "Express Application",
//         p : "Express Template Engine"})
// }).listen(PORT, () => console.log(`server started on http://localhost/${PORT}`))






// // Core Express
// const express = require("express");
// const path = require("path");
// const app = express();

// const PORT = process.env.PORT || 3000

// app.set("views",path.join(__dirname,"views"));
// app.set("view engine", "pug")

// app.use(express.urlencoded({
//     extended:true
// }))

// app.get("/", function(req,res) {
//     res.render("index",{title : "HTML FORM"})
// })

// app.post("/form_submit", (req,res) => {
//     const username = req.body.username;
//     const email = req.body.email;
//     res.end(`Your username is ${username} and Email is ${email}`)

// })
// app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`))







// // Sessions
// const express = require("express")
// const app = express()
// const session = require("express-session")

// const PORT = process.env.PORT || 3000

// app.use(session({
//     secret:"Your Secret Key",
//     resave:true,
//     saveUninitialized:true
// }))

// app.get("/", function(req,res) {
//     req.session.name="John";
//     res.send("Session set")
// })

// app.get("/session", (req,res) => {
//     var name = req.session.name;
//     res.send(name)
// })


// app.get("/destroy",function(req,res) {
//     req.session.destroy(function(error) {
//         console.log("Session destroyed");
//     })
//     res.end("Session ended")
// })
// app.listen(PORT,()=> {
//     console.log(`Server started on port ${PORT}`)
// })









// // Cookies
// const express = require("express")
// const app = express();
// const cookies = require("cookie-parser")

// const PORT = process.env.PORT || 3000

// let users = {
//     name:"Nikhil",
//     age:20
// }
// app.use(cookies())

// app.get("/", (req,res) => {
//     res.send("Cookies Tutorials")
// })

// app.get("/setUser", (req,res) => {
//     res.cookie("userData", users);
//     res.send("User Data added on Cookies");
// })

// app.get("/getUser", (req,res) => {
//     res.send(req.cookies);
// })

// app.get("/logout", (req,res) => {
//     res.clearCookie("userData")
//     res.send("User Logged out Successfully");
// })

// app.listen(PORT, ()=> {
//     console.log(`Server Started on port ${PORT}`)
// })













// login system


































