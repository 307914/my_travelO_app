const { sign, verify } = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY;

const genToken = (user, time = '1h') => {
  const { number } = user;
  const token = sign({ number }, SECRET_KEY, { expiresIn: time });

  return token;
};

const verifyToken = (token) => {
  if (!token) {
    const err = new Error();
    err.message = 'token missing please login in again';
    throw err;
  }
  const isverified = verify(token, SECRET_KEY);
  return isverified;
};

module.exports = { verifyToken, genToken };
