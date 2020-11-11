'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {

    static associate(models) {
      // define association here
      Role.belongsToMany(models.User, {
        through: 'UserRoles',
        as: 'users',
        foreignKey: 'roleId',
      });
    }
  };
  Role.init({
    name: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};