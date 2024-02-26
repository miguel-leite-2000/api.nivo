import { Company } from '@app/entities/company';
import { CompanyRepository } from '@app/repositories/company-repository';
import { Injectable } from '@nestjs/common';

interface GetAllCompaniesResponse {
  companies: Company[];
}

@Injectable()
export class GetAllCompanies {
  constructor(private companyRepository: CompanyRepository) {}

  async execute(): Promise<GetAllCompaniesResponse> {
    const companies = await this.companyRepository.all();
    return {
      companies,
    };
  }
}
