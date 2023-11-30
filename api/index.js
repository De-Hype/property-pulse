require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const Connect = require("./src/utils/db");
const globalErrorHandler = require("./src/controllers/errorController");
const PropertyRoutes = require("./src/routes/property.routes");
const UserRoutes = require("./src/routes/auth.routes");

const app = express();

// Handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled Exception, shutting down");
  process.exit(1);
});

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(globalErrorHandler);
app.use("/api/property", PropertyRoutes);
app.use("/api/user", UserRoutes);

const Port = process.env.PORT || 7070;
const server = Connect()
  .then(() =>
    app.listen(Port, () => console.log(`Server runing on localhost ${Port}`))
  )
  .catch(console.log("Error Occured"));

//Handling unHandled Rejections
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled Rejection, shutting down");
  server.close(() => {
    process.exit(1);
  });
});
