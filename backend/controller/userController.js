// controll all routes
const User = require("../model/usermodel");

// register Users
const RegisterUser = async (req, res) => {
  try {
    const {
      position,
      location,
      employment_Type,
      salary_Scale,
      tech_Icon,
      job_Description,
    } = req.body;
    // saving in database
    const userInputData = await User.create({
      position,
      location,
      employment_Type,
      salary_Scale,
      tech_Icon: "Simple Icon",
      job_Description,
    });
    // sending resposnse
    res.status(200).json({ user: userInputData });
  } catch (error) {
    //   if get any error
    res.status(200).json({ error: error });
  }
};
const getData = async (req, res) => {
  const user = await User.find();
  res.json(user);
};

module.exports = {
  RegisterUser,
  getData,
};
