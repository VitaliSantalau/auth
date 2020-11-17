const router = require("express").Router();
const bcrypt =require("bcrypt");
const pool = require("../db");
const jwtGenerator = require("../utils/jwtGenerator");


// registering
router.post("/register", async (req, res) => {
  try {

    // 1. destructure the req.body (name, email, password)

    const { name, email, password } = req.body;

    // 2. check if user exist (if user exit then throw an error)

    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email]);

    res.json(user.rows);

    if(user.rows.length !== 0) {
      return res.status(401).send("User already exist");
    }

    // 3. bcrypt the user password

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const bcryptPassword = await bcrypt.hash(password, salt);

    // 4. enter the new user inside database

    const newUser = await pool.query(
      "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *", 
      [name, email, bcryptPassword]
    );

    res.json(newUser.rows[0]);

    // 5. generating our jwt 

    const token = jwtGenerator(newUser.rows[0].user_id);

    res.json({ token });

  } catch (err) {
    console.error(err.message);    
    res.status(500).send("Server error");
  }
});

// login route
router.post("/login", async (req, res) => {
  try {

    // 1. destructure the req.body (name, email, password)

    const { email, password } = req.body;

    // 2. check if user doesn't exist (if not then throw an error)

    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email]);

    res.json(user.rows);

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
})

module.exports = router;