const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
// const cookieParser = require('cookie-parser');
const morgan = require("morgan");
require("dotenv").config();

const globalErrorHandler = require("./src/controllers/errorController");

const app = express();

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled Exception, shutting down");
  process.exit(1);
});

app.use(express.json());
app.use(cors());
app.use(helmet());

// app.use(globalErrorHandler);
const Port = process.env.PORT || 7070;
console.log("Should run na");

const server = app.listen(Port, () => {
  console.log(`Server runing on localhost ${Port}`);
});

//Handling unHandled Rejections
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled Rejection, shutting down");
  server.close(() => {
    process.exit(1);
  });
});

//Handling Uncaught Exception



// Connect().then(()=>
//     app.listen(Port, ()=> console.log(`Server runing on localhost ${Port}`))
// ).catch(
//     console.log('Error Occured')
// )
