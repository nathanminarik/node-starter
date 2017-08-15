const Sample = require('./../models/sample.model');

module.exports = {
  greeting (req, res) {
    res.send({Hi: 'There'});
  },

  createSample (req, res, next) {

    Sample.create({name: 'Sample'})
      .then((data) => res.send(`Success: ${data}`))
      .catch(next);
  },

  getAllSamples (req, res, next) {
    Sample.find({})
      .then(sample => {
        res.send({sample});
      });
  }
};
