const express = require("express");
const router = express.Router();
const {
  getCategories,
  getCategory,
  setCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

const auth = require("../middleware/authMiddleware");

// GET /api/v1/cat
// POST /api/v1/cat
router.route("/").get(auth, getCategories).post(auth, setCategory);
// PUT /api/v1/cat/:id
// DELETE /api/v1/cat/:id
router
  .route("/:id")
  .get(auth, getCategory)
  .delete(auth, deleteCategory)
  .put(auth, updateCategory);

module.exports = router;
