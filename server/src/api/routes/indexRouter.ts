var express = require("express");
var router = express.Router();

const wordRouter = require("./wordRouter");

router.use("/word", wordRouter);


module.exports = router;
