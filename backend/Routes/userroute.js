const express = require("express")
const router = express.Router()
const data =  require("../controller/userController")
// routes
router.route("/register").post(data.RegisterUser);
router.route("/users").get(data.getData);

module.exports = router;