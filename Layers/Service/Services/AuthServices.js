const authBusiness = require("../../Business/Services/AuthBusiness");
const authValidations = require("../Validations/AuthValidations");
const HttpError = require("../../Models/HttpErrors/HttpErrors");
const statusCodes = require("http2").constants;
const { GetValidationErrors } = require("../../Models/Helpers/GetValidationErrors");

const authService = {

  Login: async (userAuth) => {
    if (!userAuth.username && !userAuth.email) {
      throw new HttpError(statusCodes.HTTP_STATUS_BAD_REQUEST, "Username or email is required.");
    }
    const validations = new Map();
    validations.set("email", authValidations.EmailValidation(userAuth.email));
    validations.set("username", authValidations.UsernameValidation(userAuth.username));
    validations.set("password", authValidations.PasswordValidation(userAuth.password));
    const errors = GetValidationErrors(validations, userAuth);
    if (errors.length) {
      throw new HttpError(statusCodes.HTTP_STATUS_BAD_REQUEST, errors);
    }
    return await authBusiness.Login(userAuth);
  },

  Logout: async (bearer) => {
    if (!bearer || !bearer.split(" ")[1]) {
      throw new HttpError(statusCodes.HTTP_STATUS_UNAUTHORIZED, "Unauthorized");
    }
    await authBusiness.Logout(bearer.split(" ")[1]);
  }

}

module.exports = authService;
