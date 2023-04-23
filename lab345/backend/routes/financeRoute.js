const express = require("express");

const router = express.Router();
const {
  getFinanceAll,
  setFinance,
  getFinanceQ,
  getFinanceId,
  updateFinance,
  deleteFinance,
} = require("../controllers/financeController");

// Auth middleware
// Routes protection
const authProtection = require("../middleware/authMiddleware");

// GET /api/v1/fin
// POST /api/v1/fin
// GET /api/v1/fin?page=_&items=_
router
  .route("/")
  .get(authProtection, getFinanceAll)
  .post(authProtection, setFinance)
  .get(authProtection, getFinanceQ);
// GET /api/v1/fin/:uuid
// DELETE /api/v1/fin/:uuid
// UPDATE /api/v1/fin/:uuid
router
  .route("/:id")
  .get(authProtection, getFinanceId)
  .delete(authProtection, deleteFinance)
  .put(authProtection, updateFinance);

module.exports = router;
