const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const auth = async (req, res, next) => {
  const authHeaders = req.headers.authorization;

  if (!authHeaders || !authHeaders.startsWith("Bearer")) {
    throw new UnauthenticatedError("Authentication invalid");
  }

  const token = authHeaders.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    //attach the user to the job routes
    req.user = { userId: payload.userId, name: payload.name };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authenticaition invalid");
  }
};

module.exports = auth;
