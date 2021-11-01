const mongoose = require('mongoose');
const uri =  process.env.DATABASE_URI


mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    
            if(!err){
                console.log('Connection to MongoDB successful')
            } else {
                console.log('Error connecting to MongoDB' + err)
            }
})