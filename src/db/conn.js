const mongoose = require ("mongoose");
const DB = process.env.DATABASE;
mongoose.connect(DB).then(()=>{
    console.log("connection is sucessfull");
}).catch((e)=>{
    console.log(e);
});

