const express =require("express");
const rateLimit = require("express-rate-limit")
const myConnection=require("./src/Config/Config");
const router=require("./src/Router/Router");
const path = require('path')
const app = express();

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 100,
    message:"To Many Request From This IP,Please Try Again Later"
})

app.use(limiter)
const port =8000;
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
myConnection(); 
    
app.use(router);
app.listen(port,()=>{
    console.log(`Server Is Running At :${port}`);
});
