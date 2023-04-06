const mongoose = require('mongoose')

const purchaseSchema = mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Category',
      unique: true
    },
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
  },
  { 
    timestamps: false,
  }
)

module.exports = mongoose.model('Purchase', purchaseSchema)