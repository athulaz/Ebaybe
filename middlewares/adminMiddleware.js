// middlewares/adminMiddleware.js
const adminMiddleware = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next(); // User is admin, allow access
    } else {
      res.status(403).json({ message: 'Admin access required' });
    }
  };
  
  module.exports = adminMiddleware;
  