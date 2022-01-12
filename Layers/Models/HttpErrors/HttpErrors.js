module.exports = class HttpError {

  constructor(
    status,
    message
  ){
    this.status = status;
    this.message = message;
  }

}
