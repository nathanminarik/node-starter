const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SampleSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const Sample = mongoose.model('sample', SampleSchema);

module.exports = Sample;