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








// const express = require("express");
// const rateLimit = require("express-rate-limit");
// const myConnection = require("./src/Config/Config");
// const router = require("./src/Router/Router");
// const fetch = require('node-fetch'); // Add the correct fetch import

// const app = express();

// // Rate limiter middleware
// const limiter = rateLimit({
//   windowMs: 60 * 1000, // 1 minute
//   max: 100, // limit each IP to 100 requests per windowMs
//   message: "Too many requests from this IP, please try again later."
// });

// // Port number
// const port = 8000;

// app.use(express.json()); // Body parser middleware
// myConnection(); // Database connection
// app.use(limiter); // Apply rate limiting middleware

// // Immediately Invoked Function Expression (IIFE) for calling the API
// (async function callApi() {
//   try {
//     const random = Math.random();
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     const raw = JSON.stringify({
//       "topLanguageAndSubject": random
//     });

//     const requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow"
//     };

//     const response = await fetch("http://localhost:8000/addLanguage", requestOptions);

//     if (response.ok) {
//       console.log("API call succeeded.");
//     } else {
//       console.error("API call failed with status:", response.status);
//     }
//   } catch (error) {
//     console.error("Error making the API call:", error);
//   }
// })();

// // Use the router
// app.use(router);

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
