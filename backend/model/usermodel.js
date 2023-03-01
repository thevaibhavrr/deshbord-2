const mongoose = require("mongoose");

const UserSechma = mongoose.Schema({
  position: {
    required: [true, "Please positon field"],
    type: String,
  },
  location: {
    required: [true, "Please Location field"],
    type: String,
  },
  employment_Type: {
    required: [true, "Please Employment_Type field"],
    type: String,
  },
  salary_Scale: {
    required: [true, "Please Salary_Scale field"],
    type: Number,
  },
  tech_Icon: {
    required: [true, "Please Employment_Type field"],
    type: String,
    default : "N/A"
  },
  job_Description: {
    required: [true, "Please Employment_Type field"],
    type: String,
  },
});

 module.exports = User = mongoose.model("User",UserSechma)
