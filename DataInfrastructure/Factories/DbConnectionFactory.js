const { Sequelize } = require("sequelize");

const dbFactory = {

  GetMySqlConnection: () => new Sequelize("authdb", process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql"
  })

}

module.exports = dbFactory;
