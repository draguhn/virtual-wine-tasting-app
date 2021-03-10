'use strict';

const db = require("../models");
const User = db.user;

// Create and save a new User
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.mail) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a new user
  const user = {
    mail: req.body.mail,
    password: req.body.password,
  };

  // Save user in the database
  const data = await User.create(user)
  //User.create(tasting)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};


// GET USER BY ID
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

//GET USER BY MAIL
// exports.findOneByMail = (req, res) => {
//   const mail = req.params.mail;

//   User.findByPk(mail)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving User with mail=" + mail
//       });
//     });
// };

exports.findAllUsers = (req, res) => {
  User.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};