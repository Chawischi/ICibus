const { ClerkExpressWithAuth } = require('@clerk/clerk-sdk-node');

const requireAuth = (req, res, next) => {
  const clerk = new ClerkExpressWithAuth();

  clerk.authenticateRequest(req, res, (err, user) => {
    if (err) {
      return res.status(401).json({ message: 'Não autorizado' });
    }
    req.user = user;
    next();
  });
};

module.exports = { requireAuth };
