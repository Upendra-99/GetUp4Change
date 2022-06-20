const { generateToken, verifyToken } = require("../CommonLib/JWTtoken");
const userModel = require("../models/userModel");

exports.login = async (req, res, next) => {
  try {
    let { email, password } = req.body;

    let response = await userModel.find({
      email: email,
      password: password,
    });

    if (response.length == 0) {
      res.json({ status: false, message: "Login failed", token: false });
      return;
    }

    let token = generateToken({ ...response[0] });

    res.json({
      status: true,
      message: "Login Success",
      token,
      id: response[0]._id,
    });
  } catch (error) {
    res.status(400).json({ error: error, status: false, token: false });
  }
};

exports.signup = async (req, res, next) => {
  try {
    await userModel.insertMany([req.body]);
    res.json({ status: "Done", message: "Signup Success" });
  } catch (error) {
    res.json({ error: error });
  }
};

exports.verifyTokenFn = (req, res, next) => {
  try {
    let { token } = req.body;
    let response = verifyToken(token);
    if (!response) {
      res.json({ status: false, message: "Invalid Token" });
      return;
    }
    res.json({ status: true, message: "Authorised!" });
  } catch (error) {
    res.json({ error: error, message: "Invalid Token", status: false });
  }
};
