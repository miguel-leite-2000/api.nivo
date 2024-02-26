import { CompanyRepository } from '@app/repositories/company-repository';
import { PrismaService } from '../prisma.service';
import { Company } from '@app/entities/company';
import { PrismaCompanyMapper } from '../mappers/prisma-company-mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaCompanyRepository implements CompanyRepository {
  constructor(private prisma: PrismaService) {}
  async find(id: string): Promise<Company | null> {
    const company = await this.prisma.company.findFirst({
      where: { id },
    });

    if (!company) {
      return null;
    }

    return PrismaCompanyMapper.toDomain(company);
  }
  async findByDomain(domain: string): Promise<Company | null> {
    const company = await this.prisma.company.findFirst({
      where: { domain },
    });

    if (!company) {
      return null;
    }

    return PrismaCompanyMapper.toDomain(company);
  }
  async all(): Promise<Company[]> {
    const companies = await this.prisma.company.findMany();
    return PrismaCompanyMapper.toDomainList(companies);
  }
  async create(company: Company): Promise<void> {
    await this.prisma.company.create({
      data: PrismaCompanyMapper.toPrisma(company),
    });
  }
  async save(company: Company): Promise<void> {
    await this.prisma.company.updateMany({
      where: { id: company.id },
      data: PrismaCompanyMapper.toPrisma(company),
    });
  }
  async delete(id: string): Promise<void> {
    await this.prisma.company.delete({
      where: { id },
    });
  }
}
