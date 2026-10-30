const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  // Logic

  try {
    const token = req.headers.authorization;
    console.log(token);
    const decoded = jwt.verify(token, "coding");
    next();
  } catch (error) {
    res.send({ msg: "login First" });
  }
};

module.exports = { auth };
