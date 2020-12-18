const { model, Schema } = require('mongoose')

const Date = new Schema({
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  }
}, { timestamps: true })

module.exports = model('Date', Item)
