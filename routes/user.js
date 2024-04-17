const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { passwordEncrypt, passwordDecypt } = require("../libs/password-encrypt");

// user register
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    try {
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const hashedPassword = await passwordEncrypt(password);
      // console.log(hashedPassword);

      const newUser = new User({ email, password: hashedPassword });
      await newUser.save();

      res.status(201).json({ message: "User created successfully", status: "success",
      user: { email, role: "user", token: null }, });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  } else {
    res.status(403).json({ message: "Email and password can not be empty" });
  }
});

// user log-in
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    try {
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        const DBPassword = await passwordDecypt(existingUser.password);

        if (DBPassword === password)
          res
            .status(200)
            .json({
              message: "User Login successfully",
              status: "success",
              user: { email: existingUser.email, role: "user", token: null },
            });
        else res.status(403).json({ message: "password not match" });
      } else res.status(404).json({ message: "user not found" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  } else {
    res.status(403).json({ message: "Email and password can not be empty" });
  }
});

module.exports = router;

