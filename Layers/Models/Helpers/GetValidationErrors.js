const GetValidationErrors = (validations, model) => {
  const errors = [];
  for (const key in model) {
    if (validations.get(key).hasErrors()) {
      errors.push(
        ...validations.get(key).getErrors().map(e => {
          return {
            validation: e.validation,
            key
          }
        })
      );
    }
  }
  return errors;
}

module.exports = { GetValidationErrors };
