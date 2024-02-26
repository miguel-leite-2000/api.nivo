import { Company } from '@app/entities/company';

export abstract class CompanyRepository {
  abstract find(id: string): Promise<Company | null>;
  abstract findByDomain(domain: string): Promise<Company | null>;
  abstract all(): Promise<Company[]>;
  abstract create(company: Company): Promise<void>;
  abstract save(company: Company): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
