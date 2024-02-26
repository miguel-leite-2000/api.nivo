import { Company } from '@app/entities/company';

export class CompanyViewModel {
  static toHTTP(company: Company) {
    return {
      id: company.id,
      company: company.company,
      domain: company.domain,
      external_id: company.external_id,
      created_at: company.created_at,
      updated_at: company.updated_at,
    };
  }
}
