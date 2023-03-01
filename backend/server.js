const app = require("./app");
const dotenv = require("dotenv");
const database = require("./config/database");

// sneding sensetive data
dotenv.config({ path: "./config/config.env" });

// connect with database
database();

// connect with server
app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
