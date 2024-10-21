// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).send("Token não fornecido.");
  }

  const bearerToken = token.split(" ")[1];

  jwt.verify(
    bearerToken,
    process.env.JWT_SECRET || "your_jwt_secret",
    (err, decoded) => {
      if (err) {
        return res.status(401).send("Token inválido.");
      }
      req.userId = decoded.id; // Salva o ID do usuário no request
      next();
    }
  );
};

module.exports = verifyToken;
