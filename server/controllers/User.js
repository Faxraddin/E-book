const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

import User from "../models/User";
dotenv.config();

// Sign Up
const SignUp = async (req,res) => {
    const { name, email, password } = req.body;

    try {
      // Check if the user already exists
      const existUser = User.findOne({ email });
      if (existUser) {
        return res.status(401).json({ message: "Email already taken!" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({
        name,
        email,
        password:hashedPassword
      });

      await newUser.save();

      return res.status(200).json({message:'User registered successfully!'})
    } catch (error) {
        res.status(500).json({ message: "Error with Login" });
    }
};

// Sign In
const Login = async (req, res) => {
  try {
    const {email,password} = req.body;

    const user = await User.findOne({email});
    if (!user) {
        return res.status(401).json({message:'No such user :('});
    } else {
        const compare = await bcrypt.compare(password,user.password);
        if (!compare) {
            return res.status(401).json({message:'Wrong password!'});
        };

        return res.status(200).json({message:'Welcome Back!',user:user})
    }
  } catch (error) {
    res.status(500).json({message:'Error with Login'})
  }
};

module.exports = {
    Login:Login,
    SignUp:SignUp,
}