const HttpError = require("../../Layers/Models/HttpErrors/HttpErrors");
const { GetMySqlConnection } = require("../Factories/DbConnectionFactory");
const jwt = require("jsonwebtoken");
const Auth = require("../../Layers/Models/Entities/Auth");
const statusCodes = require("http2").constants;

const authDataInfrastructure = {

  Login: async (user) => {
    try {
      const db = GetMySqlConnection();
      await db.authenticate();
      const bearer = jwt.sign({
        id: user.id,
        username: user.username
      }, process.env.SECRET_TOKEN, { expiresIn: "1day" });
      await Auth.create({ bearer });
      return bearer;
    } catch (error) {
      throw new HttpError(error.status ?? 500, error.message ?? "Internal server error.");
    }
  },

  Logout: async (bearer) => {
    try {
      const db = GetMySqlConnection();
      await db.authenticate();
      const data = await db.query(`SELECT * FROM Auths WHERE Auths.bearer = '${bearer}'`, {
        mapToModel: Auth,
        type: db.QueryTypes.SELECT
      });
      if (!data || !data.length){
        throw new HttpError(statusCodes.HTTP_STATUS_UNAUTHORIZED, "Invalid credentials.");
      }
      await Auth.destroy({
        where: {
          bearer
        }
      });
    } catch (error) {
      throw new HttpError(error.status ?? 500, error.message ?? "Internal server error.");
    }
  }

}

module.exports = authDataInfrastructure;
