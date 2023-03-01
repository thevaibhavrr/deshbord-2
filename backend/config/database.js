// connecting with mongodb database
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connnetDatabase = () => {
  mongoose
    // database url
    .connect(process.env.DB, {
      // mongodb Permission
      usenewurlparser: true,
      useunifiedtopology: true,
    })
    .then(() => {
      console.log("mongodb connected with database ");
    })
    // if get any error
    .catch((err) => {
      console.log(" unable to  connected with database ");
    });
};

module.exports = connnetDatabase;
