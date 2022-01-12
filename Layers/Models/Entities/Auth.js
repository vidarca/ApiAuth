const { DataTypes } = require("sequelize");
const { GetMySqlConnection } = require("../../../DataInfrastructure/Factories/DbConnectionFactory");

const Auth = GetMySqlConnection().define("Auth", {
  bearer: {
    type: DataTypes.TEXT
  }
});

module.exports = Auth;
