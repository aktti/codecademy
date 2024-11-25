const mongoose=require("mongoose")
const mongoUri="mongodb://localhost:27017/newAnkit";
const myConnection=()=>{
    mongoose.connect(mongoUri)
    .then(()=>{
        console.log("MongoDB IS Connected");  
    })
    .catch((err)=>{
     console.log("Error Fetching To MongoDB",err);
     
    })
};
module.exports=myConnection