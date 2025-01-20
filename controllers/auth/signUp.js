const validator = require("validator");
const User = require("../../models/User");
const bcrypt = require("bcrypt");


const signUp = async (req, res) => {
  const { email, password, username } = req.body;
   
  if ( !email || !password || !username ) {
    return res.status(400).json({"Missing required fields"});
  }

if (!validator.isEmail(email)){
    return res.status(400).json({"Invalid email"});
}
if (!validator.isStrongPassword(password)){
    return res.status(400).json({"Password must be at least 8 charactor lons and contain at least 1 lower case 1 upper case 1 number"

    });
}

try {
    const user = await User.findOne({ eamail });
if (user) {
    return res.status(400).json({"User already exists"});
}

const salt = await bcrypt.genSalt(10);
const hashedPassword = await User.create({
    email,
    password: hashedPassword,
    username,
})



} catch (error) {
    res.status(500).json({messege:error.messege});
}

  res.send("Sign up");
};

module.exports = {
  signUp,
};
