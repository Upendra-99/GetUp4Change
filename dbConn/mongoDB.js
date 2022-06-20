const mongoose = require("mongoose");

const connect = () => {
  return mongoose
    .connect(
      "mongodb+srv://upendraDb:upendraDb@cluster0.yvi9y.mongodb.net/GetUp4Change?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("database connected successfully!");
    })
    .catch(() => {
      console.log("database connection error!");
    });
};

module.exports = connect;
