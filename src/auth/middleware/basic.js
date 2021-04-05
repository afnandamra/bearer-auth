'use strict';

const base64 = require('base-64');
const User = require('../models/users.js');

module.exports = async (req, res, next) => {
  if (!req.headers.authorization || !req.headers.authorization === 'Basic') {
    next('Invalid Login');
  }
  try {
    let basic = req.headers.authorization.split(' ')[1];
    let [username, password] = base64.decode(basic).split(':');
    req.user = await User.authenticateBasic(username, password);
    next();
  } catch (e) {
    res.status(403).send('Invalid Login');
  }
};
