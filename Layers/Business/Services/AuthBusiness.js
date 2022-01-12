const unitOfWorks = require("../../../DataInfrastructure/Services/UnitOfWorks");


const authBusiness = {

  Login: async (userAuth) => {
    const user = await unitOfWorks.userDataInfrastructure().GetUserByUsername(userAuth);
    return await unitOfWorks.authDataInfrastructure().Login(user);
  },

  Logout: async (bearer) => {
    await unitOfWorks.authDataInfrastructure().Logout(bearer);
  }

}

module.exports = authBusiness;
