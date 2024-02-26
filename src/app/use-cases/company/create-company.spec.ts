import { InMemoryCompanyRepository } from '@test/repositories/in-memory-company-repository';
import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';
import { CreateCompany } from './create-company';
import { makeCompany } from '@test/factories/company-factory';
import { makeUser } from '@test/factories/user-factory';

describe('Create company', () => {
  it('should be able to create a company', async () => {
    const companyRepository = new InMemoryCompanyRepository();
    const userRepository = new InMemoryUserRepository();

    const user = makeUser();
    const company = makeCompany();
    const createCompany = new CreateCompany(companyRepository, userRepository);
    const response = await createCompany.execute({
      company: company.company,
      domain: company.domain,
      name: user.name,
      email: user.email,
      password: user.password,
    });
    expect(companyRepository.companies).toHaveLength(1);
    expect(companyRepository.companies[0]).toEqual(response.company);
  });
});
