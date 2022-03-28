const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  // TODO: Check req.user to ensure the user's email is 'admin'
  try {
    const { session } = req.cookies;
    const payload = jwt.verify(session, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    error.message = 'You do not have access to view this page';
    error.status = 403;
    next(error);
  }
};
