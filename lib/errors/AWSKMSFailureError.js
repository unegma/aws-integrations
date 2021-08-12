class AWSKMSFailureError extends Error {
  constructor (message) {
    super(message);
    this.name = 'AWSKMSFailureError';
  }
}

export default AWSKMSFailureError;
