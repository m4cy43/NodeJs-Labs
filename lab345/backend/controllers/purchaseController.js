const asyncHandler = require("express-async-handler");

const Purchase = require("../models/puranceModel");

// @desc    Get all purances
// @route   GET /api/v1/pur
// @access  Private
const getPurchaseAll = asyncHandler(async (req, res) => {
  const pur = await Purchase.find({ user: req.user.id });

  res.status(200).json(pur);
});

// @desc    Get pur
// @route   GET /api/v1/pur/:id
// @access  Private
const getPurchaseId = asyncHandler(async (req, res) => {
  const pur = await Purchase.findById(req.params.id);

  res.status(200).json(pur);
});

// @desc    Set pur
// @route   POST /api/v1/pur
// @access  Private
const setPurchase = asyncHandler(async (req, res) => {
  if (!req.body.name | !req.body.categoryId) {
    res.status(400);
    throw new Error("Please check the fields");
  }

  const pur = await Purchase.create({
    name: req.body.name,
    category: req.body.categoryId,
  });

  res.status(200).json(pur);
});

// @desc    Update pur
// @route   PUT /api/v1/pur/:id
// @access  Private
const updatePurchase = asyncHandler(async (req, res) => {
  const pur = await Purchase.findById(req.params.id);

  if (!pur) {
    res.status(400);
    throw new Error("Purchase not found");
  }

  const updatedPurchase = await Purchase.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedPurchase);
});

// @desc    Delete pur
// @route   DELETE /api/v1/pur/:id
// @access  Private
const deletePurchase = asyncHandler(async (req, res) => {
  const pur = await Purchase.findById(req.params.id);

  if (!pur) {
    res.status(400);
    throw new Error("Purchase not found");
  }

  await pur.findByIdAndDelete(req.params.id);

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getPurchaseAll,
  setPurchase,
  getPurchaseId,
  updatePurchase,
  deletePurchase,
};
