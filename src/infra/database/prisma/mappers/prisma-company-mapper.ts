import { Company as RawCompany } from '@prisma/client';
import { Company } from '@app/entities/company';

export class PrismaCompanyMapper {
  static toPrisma(company: Company) {
    return {
      id: company.id,
      company: company.company,
      domain: company.domain,
      external_id: company.external_id,
    };
  }

  static toDomain(raw: RawCompany): Company {
    return new Company(
      {
        company: raw.company,
        domain: raw.domain,
        external_id: raw.external_id,
      },
      raw.id,
    );
  }

  static toDomainList(raw: RawCompany[]): Company[] {
    return raw.map((company) => this.toDomain(company));
  }
}
