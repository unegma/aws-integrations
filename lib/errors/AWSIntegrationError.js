class AWSIntegrationError extends Error {
  constructor (message) {
    super(message);
    this.name = 'AWSIntegrationError';
  }
}

export default AWSIntegrationError;
