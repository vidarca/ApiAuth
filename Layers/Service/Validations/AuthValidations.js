const fluentValidator = require("fluent-validator");

const validations = {
  EmailValidation: (email) => fluentValidator(email)
    .matches(/^(?=.*\@)(?=.*[a-z])(?=.*([\.]{1}[a-z]+))[a-zA-ZÁÉÍÓÚáéíóúüÜñÑ\d\S_\-]+$/).or.isUndefined(),

  UsernameValidation: (username) => fluentValidator()
    .validate(username).matches(/^[a-zA-Z]+$/).or.isUndefined()
    .validate(username?.length).isInRange(0, 31).or.isUndefined(),

  PasswordValidation: (password) => fluentValidator()
    .validate(password).isNotEmpty().isNotNull().matches(/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\.\-_\*\+\/\?\¿\!\¡\%\&\$\#\,\;\:\{\}\[\]])/)
    .validate(password.length).isInRange(7, 21)
}

module.exports = validations;
