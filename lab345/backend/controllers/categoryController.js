const asyncHandler = require("express-async-handler");
const Category = require("../models/categoryModel");

// @desc    Get add categories
// @route   GET /api/v1/cat
// @access  Private
const getCategories = asyncHandler(async (req, res) => {
  const cat = await Category.find({});

  res.status(200).json(cat);
});

// @desc    Get category by id
// @route   GET /api/v1/cat/:id
// @access  Private
const getCategory = asyncHandler(async (req, res) => {
  const cat = await Category.findById(req.params.id);

  res.status(200).json(cat);
});

// @desc    Set category
// @route   POST /api/v1/cat
// @access  Private
const setCategory = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add a name field");
  }

  const cat = await Category.create({
    name: req.body.name,
  });

  res.status(200).json(cat);
});

// @desc    Update category
// @route   PUT /api/v1/cat/:id
// @access  Private
const updateCategory = asyncHandler(async (req, res) => {
  const cat = await Category.findById(req.params.id);

  if (!cat) {
    res.status(400);
    throw new Error("Category not found");
  }

  const updCat = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updCat);
});

// @desc    Delete category
// @route   DELETE /api/v1/cat/:id
// @access  Private
const deleteCategory = asyncHandler(async (req, res) => {
  const cat = await Category.findById(req.params.id);

  if (!cat) {
    res.status(400);
    throw new Error("Category not found");
  }

  await Category.findByIdAndDelete(req.params.id);

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCategories,
  getCategory,
  setCategory,
  updateCategory,
  deleteCategory,
};
