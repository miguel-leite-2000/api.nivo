import { Company } from '@app/entities/company';
import { CompanyRepository } from '@app/repositories/company-repository';
import { CompanyNotFound } from './errors/company-not-found';
import { Injectable } from '@nestjs/common';

interface DeleteCompanyResponse {
  company: Company;
}

@Injectable()
export class DeleteCompany {
  constructor(private companyRepository: CompanyRepository) {}

  async execute(id: string): Promise<DeleteCompanyResponse> {
    const company = await this.companyRepository.find(id);

    if (!company) {
      throw new CompanyNotFound();
    }

    await this.companyRepository.delete(id);

    return { company };
  }
}
