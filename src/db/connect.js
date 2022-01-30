const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/speakersDB",{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    // useCreateIndex : true
})
.then(()=>{
    console.log("connection sucsussfull");
})
.catch((e)=>{
    console.log(e);
})