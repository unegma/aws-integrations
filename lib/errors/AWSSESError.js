class AWSSESError extends Error {
  constructor (message) {
    super(message);
    this.name = 'AWSSESError';
  }
}

export default AWSSESError;
