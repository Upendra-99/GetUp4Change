const jwt = require("jsonwebtoken");

const secret_key = "MY_SECRET_KEY";

function generateToken(payload) {
  let token = jwt.sign(payload, secret_key);
  return token;
}

function verifyToken(token) {
  let data = jwt.verify(token, secret_key);
  return data;
}

module.exports = {
  generateToken,
  verifyToken,
};
