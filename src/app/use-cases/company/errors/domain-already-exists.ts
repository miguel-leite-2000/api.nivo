export class DomainAlreadyExists extends Error {
  constructor() {
    super('Domain already exists.');
  }
}
