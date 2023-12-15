const JWT = require("jsonwebtoken");
const createError = require("http-errors");

module.exports = {
  signAccessToken: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = process.env.ACCESS_TOKEN_SECRET;

      const options = {
        expiresIn: "2h",
        issuer: "nativecoder.com",
        audience: userId,
      };

      JWT.sign(payload, secret, options, (err, token) => {
        if (err) {
          console.log(err.message);
          //reject(err);
          reject(createError.InternalServerError());
        }
        resolve(token);
      });
    });
  },

  //VERIFYACCESSTOKEN MIDDLEWARE
  //Author: Emaye Andrew
  // Desc: This middleware helps in authorizing users routes. which routes they can have access to or not.

  verifyAccessToken: (req, res, next) => {
    if (!req.headers["authorization"]) return next(createError.Unauthorized());
    const authHeader = req.headers["authorization"];
    const bearerToken = authHeader.split(" ");
    const token = bearerToken[1];
    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
      if (err) {
        return next(createError.Unauthorized());
      }
      req.payload = payload;
      next();
    });
  },
};
