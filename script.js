const jwt = require('jsonwebtoken');

const SECRET_KEY = 'adsddfvcvddxc'; // Replace with env var in production
const EXPIRES_IN = '1h'; // Token valid for 1 hour

const encrypt = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRES_IN });
};

const decrypt = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return null; // Token invalid or expired
  }
};

module.exports = {
  encrypt,
  decrypt
};
