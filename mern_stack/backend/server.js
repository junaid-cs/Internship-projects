require('dotenv').config()
const express = require('express')
const workout = require('./routes/routes')
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();
 
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log('Request path:', req.path);
    console.log('HTTP method:', req.method);
    next();
  });
 
app.use('/api/workouts',workout);

app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  });

  mongoose.connect(process.env.MONGOOSE_URI)
  .then(()=>{
    app.listen(parseInt(process.env.PORT),()=>{
        console.log("listening",process.env.PORT);
    })    
  })
  .catch(err=> console.log(err) );


