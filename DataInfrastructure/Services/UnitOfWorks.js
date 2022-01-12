const authDataInfrastructure = require("./AuthDataInfrastructure");
const userDataInfrastructure = require("./UserDataInfrastructure");

const unitOfWorks = {

  authDataInfrastructure: () => authDataInfrastructure,

  userDataInfrastructure: () => userDataInfrastructure

}

module.exports = unitOfWorks;
