const jwt = require("jsonwebtoken");

const JWT_SECRET =
  process.env.JWT_SECRET ||
  "9bcbaf01b928149adc39a690606ce89b9cdc58f8bb22372fcbba53d770cb08512bb623ab49ac3b2478a9cb59e32f77e6b8aef702e6870005e08c176c089f9244";

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Access Denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid or expired token." });
  }
};

module.exports = { verifyToken };
