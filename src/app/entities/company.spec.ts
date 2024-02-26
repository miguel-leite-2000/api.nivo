import { makeCompany } from '@test/factories/company-factory';
import { Company } from './company';

describe('Company', () => {
  it('should be able to create company', () => {
    const company = new Company(makeCompany());
    expect(company).toBeTruthy();
  });
});
