const { model, Schema } = require('mongoose')

const Workout = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      type: {
        type: String,
        required: 'Enter workout type'
      },
      name: {
        type: String,
        required: 'Enter workout name'
      },
      duration: {
        type: Number,
        required: 'Enter workout duration'
      }
    }
  ]
}, { timestamps: true })

module.exports = model('Workout', Workout)
