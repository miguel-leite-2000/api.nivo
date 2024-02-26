export class CompanyNotFound extends Error {
  constructor() {
    super('Company not found.');
  }
}
