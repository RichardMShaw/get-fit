module.exports = require('mongoose').connect('mongodb://localhost/workout_date_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})