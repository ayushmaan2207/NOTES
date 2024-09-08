const express = require("express");
const router =  express.Router();

// ,imageReducerUpload,
const {localFileUpload,imageUpload,videoUpload} = require("../controllers/fileUpload");

router.post("/localFileUpload",localFileUpload);
router.post("/imageUpload",imageUpload);
router.post("/videoUpload",videoUpload);
// router.post("/imageReducerUpload",imageReducerUpload);

module.exports= router;