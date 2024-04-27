const { config } = require('dotenv');
const { fakeData } = require('./consts.js');

config();
const isUsedFakeData = process.env.USE_FAKE_DATA === 'yes';

const fakeMiddleware = (req, res, next) => {
  if (isUsedFakeData) {
    return res.send(fakeData);
  }
  
  next();
};

module.exports = {
  fakeMiddleware,
}