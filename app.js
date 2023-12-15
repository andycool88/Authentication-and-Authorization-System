const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
require("dotenv").config();
require("./helpers/init_mongodb");

const { verifyAccessToken } = require("./helpers/jwt_helper");

const AuthRoute = require("./Routes/Auth.route");

const app = express();

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/home", verifyAccessToken, async (req, res, next) => {
  console.log(req.headers["authorization"]);
  res.send("hello world");
});

app.use("/auth", AuthRoute);

app.use(async (res, req, next) => {
  //   const error = new Error("Not found");
  //   error.status = 404;
  //   next(error);
  next(createError.NotFound("This route does not exist"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
