const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
// const cookieParser = require('cookie-parser');
const morgan = require('morgan');
require('dotenv').config();

const globalErrorHandler = require('./src/controllers/errorController')

const app = express();
app.use(express.json());
app.use(cors())
app.use(helmet());

// app.use(globalErrorHandler);
const Port = process.env.PORT || 7070;
console.log('Should run na')


app.listen(Port, ()=>{
    console.log(`Server runing on localhost ${Port}`)
});


// Connect().then(()=>
//     app.listen(Port, ()=> console.log(`Server runing on localhost ${Port}`))
// ).catch(
//     console.log('Error Occured')
// )