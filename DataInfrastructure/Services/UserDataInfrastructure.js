const axios = require("axios");
const HttpError = require("../../Layers/Models/HttpErrors/HttpErrors");

const userDataInfrastructure = {

  GetUserByUsername: async (userRequest) => {
    try {
      const response = await axios.get(process.env.USER_API + `/api/User/GetUserByUsernameOrEmail?username=${userRequest.username}&email=${userRequest.email}`);
      return response.data;
    } catch (error) {
      throw new HttpError(error.response.status ?? 500, error.response.data.message ?? "Internal server error.");
    }
  }

}

module.exports = userDataInfrastructure;
