require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Speaker = require('./src/models/speakerSchema');
require('./src/db/connect');
const port = process.env.port || 3000;

const static_path = path.join(__dirname,"./public");
app.use(express.json())
app.use(bodyParser.json());
app.use(express.static(static_path));

app.use(bodyParser.urlencoded({
    extended: false
}));




app.post("/submit", async(req,res)=>{
    try{
        const name = req.body.name
        const email = req.body.email;
        const femail = await Speaker.findOne({email : email});
        const fname = await Speaker.findOne({name : name});

        if(!femail){
            const newSpeaker = new Speaker({
                name : name,
                email : email,
                phone : req.body.phone,
                occupation : req.body.occupation,
                message : req.body.message
            })

            const speaker = await newSpeaker.save();
            res.status(201).redirect("index.html");
        }
        else{
            res.redirect("index.html")
        } 
        
    }
    catch(error){
        res.status(404).send(error);
    }
})




app.get('/',function(req,res){
    res.set({
        'Access-control-Allow-Origin': '*'
        });
    return res.redirect('index.html');
})




app.listen(port,()=>{
    console.log("server is running at port no "+port);
})