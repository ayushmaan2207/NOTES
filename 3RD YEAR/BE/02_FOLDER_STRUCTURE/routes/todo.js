const express=require("express");
const router= express.router();

// import controller 
const {createTodo} =require("../controllers/createTodo");

// define API routes
router.post("/createTodo",createTodo);

module.exports = router;