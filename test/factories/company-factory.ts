import { Company } from '@app/entities/company';
import { faker } from '@faker-js/faker';

type Override = Partial<Company>;

export function makeCompany(override: Override = {}) {
  return new Company({
    logo: faker.image.url(),
    company: faker.company.buzzAdjective(),
    domain: faker.internet.domainName(),
    external_id: faker.string.uuid(),
    ...override,
  });
}
