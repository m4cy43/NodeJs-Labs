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

// GET /api/v1/finance
// POST /api/v1/finance
// GET /api/v1/finance?page=_&items=_
router
  .route("/")
  .get(authProtection, getFinanceAll)
  .post(authProtection, setFinance)
  .get(authProtection, getFinanceQ);
// GET /api/v1/finance/{uuid}
// DELETE /api/v1/finance/{uuid}
// UPDATE /api/v1/finance/{uuid}
router
  .route("/:id")
  .get(authProtection, getFinanceId)
  .delete(authProtection, deleteFinance)
  .put(authProtection, updateFinance);

module.exports = router;
