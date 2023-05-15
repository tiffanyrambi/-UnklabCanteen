const User = require("./model");

const index = async (req, res, next) => {
  try {
    const users = await User.find();
    res.send({ status: "success", message: "welcome to database for react native", data: users });
  } catch (error) {
    res.send({ status: "error", message: error.message });
  }
};

module.exports = {
  index,
};
