const asyncHandler = require("express-async-handler");

const Finance = require("../models/financeModel");

// @desc    Get all finances
// @route   GET /api/v1/fin
// @access  Private
const getFinanceAll = asyncHandler(async (req, res) => {
  const fin = await Finance.find({ user: req.user.id }).sort({
    updatedAt: "desc",
  });

  res.status(200).json(fin);
});

// @desc    Get fin
// @route   GET /api/v1/fin/:id
// @access  Private
const getFinanceId = asyncHandler(async (req, res) => {
  const fin = await Finance.findById(req.params.id);

  res.status(200).json(fin);
});

// @desc    Get fin
// @route   GET /api/v1/fin/q?page=_&items=_
// @access  Private
const getFinanceQ = asyncHandler(async (req, res) => {
  if (!req.query.page || !req.query.items) {
    res.status(400);
    throw new Error("Please set query correctly");
  }

  const page = (req.query.page - 1) * req.query.items;
  const items = req.query.items;
  const fin = await Finance.find({ user: req.user.id })
    .sort({
      updatedAt: "desc",
    })
    .skip(page)
    .limit(items);

  res.status(200).json(fin);
});

// @desc    Set fin
// @route   POST /api/v1/fin
// @access  Private
const setFinance = asyncHandler(async (req, res) => {
  if (!req.body.sum | !req.body.purchaseId) {
    res.status(400);
    throw new Error("Please check the fields");
  }

  const fin = await Finance.create({
    user: req.user.id,
    purchase: req.body.purchaseId,
    sum: req.body.sum,
  });

  res.status(200).json(fin);
});

// @desc    Update fin
// @route   PUT /api/v1/fin/:id
// @access  Private
const updateFinance = asyncHandler(async (req, res) => {
  const fin = await Finance.findById(req.params.id);

  if (!fin) {
    res.status(400);
    throw new Error("Finance not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the fin user
  if (fin.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedFinance = await Finance.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedFinance);
});

// @desc    Delete fin
// @route   DELETE /api/v1/fin/:id
// @access  Private
const deleteFinance = asyncHandler(async (req, res) => {
  const fin = await Finance.findById(req.params.id);

  if (!fin) {
    res.status(400);
    throw new Error("Finance not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the fin user
  if (fin.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await Finance.findByIdAndDelete(req.params.id);

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getFinanceAll,
  setFinance,
  getFinanceQ,
  getFinanceId,
  updateFinance,
  deleteFinance,
};
