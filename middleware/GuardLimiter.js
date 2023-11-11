/* Déclaration RateLimit */
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 3,
    message:
        "Vous avez effectué plus de 3 requêtes sur la login!",
    headers: true,
});

module.exports = limiter;