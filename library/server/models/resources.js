'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Resources extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Resources.belongsTo(models.Users)
      Resources.hasMany(models.Favorites, {as : 'Resources', foreignKey: 'ResourcesId'})
    }
  };
  Resources.init({
    title: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg: 'title is required'
        }
      }
    },
    description:{
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg: 'description is required'
        }
      }
    },
    link: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg: 'link is required'
        },
        isUrl : {
          args : true,
          msg : 'url invalid'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Resources',
  });
  return Resources;
};