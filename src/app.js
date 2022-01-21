const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const port = process.env.PORT || 5000;
require("./db/conn");

app.use(express.json());
// app.use("/Images",express.static('./Images'))
app.use(express.static(__dirname));
const GiftData = require("./models/giftsdata")


app.get("/",(req,res)=>{
    res.send('Sahil here! welcome to my API')
});


/// CRUD code starts here


//CREATING A NEW STUDENT USING PROMISES//

app.post("/gifts", async (req, res) => {


    try {

        const newGiftData = new GiftData(req.body);

        const createGiftData = await newGiftData.save();
        res.status(201).send(createGiftData);
    } catch (e) {
        res.status(400).send(e);
    }
});

//READ THE DATA OF REGISTERED STUDENTS
app.get("/gifts", async (req, res) => {
    try {
        const giftData = await GiftData.find();
        res.send(giftData);
    } catch (e) {
        res.status(500).send(e);
    }
});


//GET INDIVIDUAL STUDENTS DATA USING USED ID
app.get("/gifts/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const giftData = await GiftData.findById({ _id: _id });

        if(!giftData){
            res.status(404).send();
        }else{
        res.send(giftData);}
    } catch (e) {
        res.status(500).send(e);
    };

});




// UPDATE THE STUDENT BY ITS ID

app.patch("/gifts/:id",async (req ,res)=>{
    try{
        const _id = req.params.id;
    const updategiftData  =  await  GiftData.findByIdAndUpdate({_id: _id},req.body,{new:true});
    res.send(updategiftData);
    }catch(e){
        res.status(404).send(e);
    };

});


//  DELETE THE STUDENT'S DATA VIA ID

app.delete("/gifts/:id",async(req,res)=>{
try{
    const _id = req.params.id;
    const deleteGiftData = await GiftData.findByIdAndDelete({_id:_id});
    if(!_id){
        return res.status(400).send();
    }
 req.send(deleteGiftData);
}catch(e){
 res.status(500).send(e);
}
})




/// CRUD code ends here


app.listen(port,()=>{
    console.log(`listening to port number ${port}`);
});