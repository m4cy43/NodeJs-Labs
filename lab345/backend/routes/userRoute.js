const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  getAuthUser,
} = require("../controllers/userController");

// Auth middleware
// Routes protection
const auth = require("../middleware/authMiddleware");

// POST /api/v1/user/signup
router.post("/signup", createUser);
// POST /api/v1/user/login
router.post("/login", loginUser);
// GET /api/v1/user/me
router.get("/me", auth, getAuthUser);

module.exports = router;
