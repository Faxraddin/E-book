const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const User = require("../models/User");
const Book = require("../models/Book");

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

// Add book
const AddBook = async (req,res) => {
  try {
    const { author, title, text, category, userId } = req.body;

    // Create a new book and associate the book with the specific user
    const newBook = new Book({
      author,
      title,
      text,
      category,
      user: userId,
    });

    await newBook.save();

     res.status(201).json({ message: "Book added successfully"});
  } catch (error) {
    res.status(500).json({ message: "Error adding book" });
  }
}

//GetBooksForUser
const GetBooksForUser = async (req, res) => {
  try {
    const {userId} = req.body;

    const booksForUser = await Book.find({user: userId});

    res.status(200).json({ books: booksForUser });
  } catch (error) {
    res.status(500).json({ message: "Error GetBooksForUser" });
  }
}

//GetBooksForUserCategory
const GetBooksForUserCategory = async (req,res) => {
  try {
    const {userId,category} = req.body;

    const booksByCategory = await Book.find( {user:userId, category:category});

    res.status(200).json({ booksByCategory: booksByCategory });
  } catch (error) {
    res.status(500).json({ message: "Error GetBooksForUserCategory" });
  }
}

//Continue to read  the book
const ContinueToReadTheBook = async (req, res) => {
  try {
    const { userId } = req.body;

    const user = await User.findById(userId).populate('userProgress');

    if (!user || !user.userProgress) {
      return res.status(404).json({ message: "No book in progress found." });
    };

    const bookDetails = user.userProgress;

    res.status(200).json({ bookDetails });
  } catch (error) {
    res.status(500).json({ message: "Error ContinueToReadTheBook" });
  }
};

//UpdateUserProgress
const UpdateUserProgress = async (req, res) => {
  try {
    const { userId, bookId } = req.body;

    await User.findByIdAndUpdate(userId, { userProgress: bookId });
    res.status(200).json({ message: "User progress updated successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error UpdateUserProgress" });
  }
}

//

module.exports = {
  Login: Login,
  SignUp: SignUp,

  AddBook: AddBook,
  GetBooksForUser: GetBooksForUser,
  GetBooksForUserCategory: GetBooksForUserCategory,

  ContinueToReadTheBook:ContinueToReadTheBook,
  UpdateUserProgress:UpdateUserProgress,
};