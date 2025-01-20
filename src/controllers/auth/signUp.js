const validator = require("validator");
const User = require("../../models/auth");
const bcrypt = require("bcrypt");
const { createToken } = require("../../utils");

const signUp = async (req, res) => {
  const { email, password, username } = req.body;

  if (!email || !password || !username) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }

  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({
      message:
        "Password must be at least 8 characters long and contain at least 1 lowercase, 1 uppercase, 1 number, and 1 symbol",
    });
  }

  try {
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Salting is adding random characters to the password
    const salt = await bcrypt.genSalt(10);

    // Hashing is converting the password to a random string
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      username,
    });

    const token = createToken(newUser._id);

    return res.status(201).json({ token, user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  signUp,
};
