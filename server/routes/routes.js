const SampleController = require('./../controllers/sample.controller');

module.exports = app => {
  // Sample Routes
  app.post('/api/sample', SampleController.createSample);
  app.get('/api/sample', SampleController.getAllSamples);
};