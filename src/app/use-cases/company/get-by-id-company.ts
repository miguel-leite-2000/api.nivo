import { Company } from '@app/entities/company';
import { CompanyRepository } from '@app/repositories/company-repository';

interface GetByIdCompanyResponse {
  company: Company | null;
}
export class GetByIdCompany {
  constructor(private companyRepository: CompanyRepository) {}

  async execute(id: string): Promise<GetByIdCompanyResponse> {
    const company = await this.companyRepository.find(id);
    return { company };
  }
}
