'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};
// prevent upload of pw to github!!!
require('dotenv').config();

// INITIALIZE SEQUELIZE
// name of DB + user name (my user name is postgres) + password
// You need to create  a db manually with postgres in your terminal first to make it work
const sequelize = new Sequelize('testwine6','postgres',process.env.PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  // what is logging and pool doing
  logging: false,
  // pool is optional, it will be used for Sequelize connection pool configuration
  pool: {
    max: 5, //maximum number of connection in pool
    min: 0, //minimum number of connection in pool
    acquire: 30000,
    idle: 10000 //maximum time, in milliseconds, that a connection can be idle before being released
  },
});

// Scans all files in ./model and creates associations 
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// what is happening here?
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;