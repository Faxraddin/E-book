const express = require('express');
const router = express.Router();

const {
  Login,
  SignUp,

  AddBook,
  GetBooksForUser,
  GetBooksForUserCategory,

  UpdateUserProgress,
  ContinueToReadTheBook,
} = require("../controllers/User");

// Sign Up
router.post('/signUp', SignUp);

// Sign In
router.post('/login', Login);

// Add book
router.post('/addBook', AddBook);

// Get books for a user
router.get('/getbooksforuser/:userId', GetBooksForUser);

// Get books for a user with a specific category
router.get('/getBooksForUserCategory/:userId/:category', GetBooksForUserCategory);

// UpdateUserProgress
router.post("/updateUserProgress", UpdateUserProgress);

//  ContinueToReadTheBook
router.get('/continueToReadTheBook',  ContinueToReadTheBook);

module.exports = router;