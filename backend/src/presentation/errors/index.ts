/* eslint-disable max-classes-per-file */
export class InternalServerError extends Error {
  constructor() {
    super();
    this.message = 'Internal server error';
  }
}

export class InvalidParameter extends Error {
  constructor(parameter: string) {
    super();
    this.message = `Provided <${parameter}> is invalid`;
  }
}
