class NotFoundException extends Error {
  constructor(message = 'Wanted Profile not found.') {
    super(message);
    this.status = 404;
    this.message = message;
  }
}

module.exports = {
  NotFoundException
};
