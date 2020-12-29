const {Model, DataTypes} = require("sequelize");
const {sequelize} = require("../db");

class UserInfo extends Model {}

UserInfo.init({
  givenName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  familyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: "user_info",
  underscored: true,
  timestamps: false,
  freezeTableName: true,
  sequelize,
});

module.exports = UserInfo;