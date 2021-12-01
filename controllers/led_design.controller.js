const db = require("../models");
const LED_Design = db.led_designs;
const Op = db.Sequelize.Op;

// Create and Save a new design
exports.create = (req, res) => {
    console.log("Creating design");
  // Validate request
  if (!req.body.ledColors) {
    res.status(400).send({
      message: "Content can not be empty."
    });
    return;
  }

  // Create a design
  const led_design = {
    ledColors: req.body.ledColors,
  };

  // Save design in the database
  LED_Design.create(led_design)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the LED Design."
      });
    });
};

// Retrieve all designs from the database.
exports.findAll = (req, res) => {
    console.log("Retrive all");
  const led_design = req.query.ledColors;
  var condition = led_design ? { led_design: { [Op.like]: `%${led_design}%` } } : null;

  LED_Design.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving designs."
      });
    });
};

// Find a single design with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  LED_Design.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving LED Design with id=" + id
      });
    });
};

// Delete all designs from the database.
exports.deleteAll = (req, res) => {
  LED_Design.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} LED Designs were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all designs."
      });
    });
};
