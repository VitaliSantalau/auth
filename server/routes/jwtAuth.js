const router = require("express").Router();
const bcrypt = require("bcrypt");
const pool = require("../db");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validinfo");
const authorization = require("../middleware/authorization");


// registering
router.post("/register", validInfo, async (req, res) => {
  try {

    // 1. destructure the req.body (name, email, password)
    const { name, email, password } = req.body;

    // 2. check if user exist (if user exit then throw an error)
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email]);

    if(user.rows.length > 0) {
      return res.status(401).json("User already exist");
    };

    // 3. bcrypt the user password
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    // 4. enter the new user inside database
    let newUser = await pool.query(
      "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *", 
      [name, email, bcryptPassword]
    );

    // 5. generating our jwt 
    const token = jwtGenerator(newUser.rows[0].user_id);

    res.json({ token });

  } catch (err) {
    console.error(err.message);    
    res.status(500).send("Server error");
  }
});

// login route
router.post("/login", validInfo, async (req, res) => {
  
  // 1. destructure the req.body (name, email, password)
  const { email, password } = req.body;
  
  try {
    // 2. check if user doesn't exist (if not then throw an error)
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email]);

    if(user.rows.length === 0) {
      return res.status(401).json("Password or Email is incorrect");
    };

    // 3. check if incoming password is the same the database password
    const validPassword = await bcrypt.compare(password, user.rows[0].user_password);

    if(!validPassword) {
      return res.status(401).json("Password or Email is incorrect");
    }

    // 4. give them the jwt token
    const token = jwtGenerator(user.rows[0].user_id);

    res.json({ token });
    
  } catch (err) {
    console.error(err.message);    
    res.status(500).send("Server error");
  }
});

// verify check route
router.get("/is-verify", authorization, (req, res) => {
  try {

    res.json(true);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;