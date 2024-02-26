import { Injectable } from '@nestjs/common';

import { User } from '@app/entities/user';
import { CompanyRepository } from '@app/repositories/company-repository';
import { UserRepository } from '@app/repositories/user-repository';
import { DomainAlreadyExists } from './errors/domain-already-exists';
import { EmailAlreadyExists } from '../user/errors/email-already-exists';
import { Company } from '@app/entities/company';
import { hash } from 'bcryptjs';

interface CreateCompanyRequest {
  logo?: File;
  company: string;
  domain: string;
  name: string;
  email: string;
  password: string;
}

interface CreateCompanyResponse {
  company: Company;
}

@Injectable()
export class CreateCompany {
  constructor(
    private companyRepository: CompanyRepository,
    private userRepository: UserRepository,
  ) {}

  async execute(request: CreateCompanyRequest): Promise<CreateCompanyResponse> {
    const { company: company_name, domain, name, email, password } = request;

    const domainAlreadyExists =
      await this.companyRepository.findByDomain(domain);
    if (domainAlreadyExists) {
      throw new DomainAlreadyExists();
    }

    const emailAlreadyExists = await this.userRepository.findByEmail(email);
    if (emailAlreadyExists) {
      throw new EmailAlreadyExists();
    }

    const company = new Company({
      company: company_name,
      domain,
      external_id: null,
    });

    const hashPassword = await hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashPassword,
      companyId: company.id,
    });

    Promise.all([
      await this.companyRepository.create(company),
      await this.userRepository.create(user),
    ]);

    return {
      company,
    };
  }
}
