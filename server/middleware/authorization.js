const jwt = require("jsonwebtoken");
require("dotenv").config();

//this middleware will on continue on if the token is inside the local storage

module.exports = async (req, res, next) => {
  // Get token from header
  const jwToken = req.header("token")

  // Check if not token
  if(!jwToken) {
    return res.status(403).json("Not Authorize");
  };

  // Verify token
  try {
    //it is going to give use the user id (user:{id: user.id})
    const payload = jwt.verify(jwToken, process.env.jwtSecret);

    req.user = payload.user;

    next();

  } catch (err) {
    console.error(err.message);
    return res.status(403).json("Not Authorize");
  }
};