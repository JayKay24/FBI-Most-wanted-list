class ServiceUnavailableException extends Error {
    constructor(message = "Service unavailable. Please try again after some time.") {
        super(message);
        this.status = 503;
        this.message = message;
      }
    }
}

module.exports = {
    ServiceUnavailableException
};
