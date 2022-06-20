const express = require("express");
const app = express();
const cors = require("cors");
const UserController = require("../controllers/userController");

app.use(cors());
app.use(express.json([]));

app.post("/login", UserController.login);
app.post("/signup", UserController.signup);
app.post("/verifyToken", UserController.verifyTokenFn);
app.post("/getUserById/:id", UserController.getUserById);

module.exports = app;
