import { Company } from '@app/entities/company';
import { Injectable } from '@nestjs/common';
import { CompanyNotFound } from './errors/company-not-found';
import { CompanyRepository } from '@app/repositories/company-repository';

interface UpdateCompanyRequest {
  id: string;
  logo?: File;
  company: string;
  domain: string;
}

interface UpdateCompanyResponse {
  company: Company;
}

@Injectable()
export class UpdateCompany {
  constructor(private companyRepository: CompanyRepository) {}

  async execute(request: UpdateCompanyRequest): Promise<UpdateCompanyResponse> {
    const { id, company, domain } = request;

    const companyNotFound = await this.companyRepository.find(id);

    if (!companyNotFound) {
      throw new CompanyNotFound();
    }

    const data = new Company(
      {
        company,
        domain,
      },
      id,
    );

    await this.companyRepository.save(data);

    return { company: data };
  }
}
