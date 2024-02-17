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
router.post('/signup', SignUp);

// Sign In
router.post('/login', Login);

// Add book
router.post('/addbook', AddBook);

// Get books for a user
router.get('/getbooksforuser/:userId', GetBooksForUser);

// Get books for a user with a specific category
router.get('/getbooksforusercategory/:userId/:category', GetBooksForUserCategory);

// UpdateUserProgress
router.post("/UpdateUserProgress", UpdateUserProgress);

//  ContinueToReadTheBook
router.get('/ContinueToReadTheBook',  ContinueToReadTheBook);

module.exports = router;