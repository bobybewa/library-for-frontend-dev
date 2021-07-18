'use strict';
const {
  Model
} = require('sequelize');
const { hashPass } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Resources)
    }
  };
  Users.init({
    email: {
      type: DataTypes.STRING,
      validate : {
        isEmail: {
          args: true,
          msg : 'email invalid'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate : {
        len: {
          args: [6,10],
          msg : 'password at least 6 characters'
        }
      }
    },
    username: DataTypes.STRING,
    headline: {
      type : DataTypes.STRING,
      defaultValue : ''
    },
    linkedin: {
      type : DataTypes.STRING,
      defaultValue : ''
    },
    instagram: {
      type : DataTypes.STRING,
      defaultValue : ''
    },
    github: {
      type : DataTypes.STRING,
      defaultValue : ''
    }
  }, {
    sequelize,
    modelName: 'Users',
    hooks: {
      beforeCreate: (user) => {
        user.password = hashPass(user.password)
      }
    }
  });
  return Users;
};