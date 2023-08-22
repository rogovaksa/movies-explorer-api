const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 55000,
  max: 160,
  // standardHeaders: true,
  // legacyHeaders: false,
});

module.exports = limiter;
