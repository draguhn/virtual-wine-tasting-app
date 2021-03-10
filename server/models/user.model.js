'use strict';

module.exports = (sequelize, DataTypes) => {

  const user = sequelize.define('user', {

    mail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }

    // The timestamp is added automatically by Sequelize
    // http://docs.sequelizejs.com/manual/tutorial/models-definition.html#timestamps
  });
  user.associate = model => {
    user.hasMany(model.tasting);
  };
  return user;
}


// 'use strict';

// module.exports = (sequelize, DataTypes) => sequelize.define('User', {
//   mail: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }

//   // The timestamp is added automatically by Sequelize
//   // http://docs.sequelizejs.com/manual/tutorial/models-definition.html#timestamps
// });