const express = require("express");

const router = express.Router();
const {
  getPurchaseAll,
  setPurchase,
  getPurchaseId,
  updatePurchase,
  deletePurchase,
} = require("../controllers/purchaseController");

// Auth middleware
// Routes protection
const authProtection = require("../middleware/authMiddleware");

// GET /api/v1/pur
// POST /api/v1/pur
router
  .route("/")
  .get(authProtection, getPurchaseAll)
  .post(authProtection, setPurchase);
// GET /api/v1/pur/:uuid
// DELETE /api/v1/pur/:uuid
// UPDATE /api/v1/pur/:uuid
router
  .route("/:id")
  .get(authProtection, getPurchaseId)
  .delete(authProtection, deletePurchase)
  .put(authProtection, updatePurchase);

module.exports = router;
