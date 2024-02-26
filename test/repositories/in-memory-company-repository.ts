import { Company } from '@app/entities/company';
import { CompanyRepository } from '@app/repositories/company-repository';

export class InMemoryCompanyRepository implements CompanyRepository {
  public companies: Company[] = [];
  async find(id: string): Promise<Company | null> {
    const company = this.companies.find((item) => item.id === id);

    if (!company) {
      return null;
    }

    return company;
  }
  async findByDomain(domain: string): Promise<Company | null> {
    const company = this.companies.find((item) => item.domain === domain);

    if (!company) {
      return null;
    }

    return company;
  }
  async all(): Promise<Company[]> {
    return this.companies;
  }
  async create(company: Company): Promise<void> {
    this.companies.push(company);
  }
  async save(company: Company): Promise<void> {
    const companyIndex = this.companies.findIndex(
      (item) => item.id === company.id,
    );

    if (companyIndex >= 0) {
      this.companies[companyIndex] = company;
    }
  }
  async delete(id: string): Promise<Company> {
    const index = this.companies.findIndex((company) => company.id === id);

    const deletedCompany = this.companies.splice(index, 1)[0];
    return Promise.resolve(deletedCompany);
  }
}
