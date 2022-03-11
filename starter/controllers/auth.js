const register = async (req, res) => {
  res.send("rigester");
};

const login = async (req, res) => {
  res.send("login");
};

module.exports = {
  register,
  login,
};
