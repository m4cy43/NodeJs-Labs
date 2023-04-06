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

// GET /api/v1/finance
// POST /api/v1/finance
// GET /api/v1/finance?page=_&items=_
router.route("/").get(getFinanceAll).post(setFinance).get(getFinanceQ);
// GET /api/v1/finance/{uuid}
// DELETE /api/v1/finance/{uuid}
// UPDATE /api/v1/finance/{uuid}
router.route("/:id").get(getFinanceId).delete(deleteFinance).put(updateFinance);

module.exports = router;
