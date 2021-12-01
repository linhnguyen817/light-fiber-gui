module.exports = app => {
    const led_designs = require("../controllers/led_design.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Design
    router.post("/update_design", led_designs.create);
  
    // Retrieve all Designs
    router.get("/all_designs", led_designs.findAll);
  
    // Retrieve a single Design with id
    router.get("/:id", led_designs.findOne);
  
    // Delete all designs
    router.delete("/delete_all", led_designs.deleteAll);
  
    app.use('/led_designs', router);
  };    