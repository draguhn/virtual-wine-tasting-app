'use strict';

const db = require("../models");
const Tasting = db.tasting;
// const Op = db.Sequelize.Op;

// Create and Save a new Tasting
exports.create = async (req, res) => {
  // Validate request
  //if (!req.body.user) {
  if (!req.body.winery) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tasting
  const tasting = {
    userId: req.body.userId,
    winery: req.body.winery,
    year: req.body.year,
    grape: req.body.grape,
    fruit: req.body.fruit,
    acidity: req.body.acidity,
    tannins: req.body.tannins,
    body: req.body.year,
    dominantFlavors: req.body.dominantFlavors,
    arrPossibleFlavors: req.body.arrPossibleFlavors,
    overallRating: req.body.overallRating,
  };

  // Save Tasting in the database
  const data = await Tasting.create(tasting)
    //Tasting.create(tasting)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tasting."
      });
    });
};

// Retrieve all Tastings from the database.
exports.findAll = (req, res) => {
  const id = req.params.id;
  // const user = req.query.user;
  // let condition = user ? { user: { [Op.iLike]: `%${user}%` } } : null;
  //Tasting.findAll({ where: condition })
  Tasting.findAll({where: {userId: id}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Delete a Tasting with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tasting.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tasting was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tasting with id=${id}. Maybe Tasting was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tasting with id=" + id
      });
    });
};

// Find a single Tasting with an id
exports.findOne = (req, res) => {

};

// Update a Tasting by the id in the request
exports.update = (req, res) => {

};






// const db = require('../models');

// exports.getAllTastings = async ctx => {
//   try {
//     ctx.body = await db.Tasting.findAll();
//   } catch (error) {
//     console.log('GET TASTING ERROR', error); //eslint-disable-line no-console
//     ctx.status = 500;
//   }
// };

// exports.postTasting = async ctx => {
//   const tasting = ctx.request.body;
//   try {
//     await db.Tasting.create({
//       user: tasting.user,
//       winery: tasting.winery,
//       year: tasting.year,
//       grape: tasting.grape,
//       fruit: tasting.fruit,
//       acidity: tasting.acidity,
//       tannins: tasting.tannins,
//       body: tasting.body,
//       dominantFlavors: tasting.dominantFlavors,
//       arrPossibleFlavors: tasting.arrPossibleFlavors,
//       overallRating: tasting.overallRating
//     });
//     ctx.status = 200;
//   } catch (error) {
//     console.log('POST TASTING ERROR', error); //eslint-disable-line no-console
//     ctx.status = 500;
//   }
// };






