import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CompanyRepository } from '@app/repositories/company-repository';
import { PrismaCompanyRepository } from './prisma/repositories/prisma-company-repository';
import { UserRepository } from '@app/repositories/user-repository';
import { PrismaUserRepository } from './prisma/repositories/prisma-user-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: CompanyRepository,
      useClass: PrismaCompanyRepository,
    },
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [CompanyRepository, UserRepository],
})
export class DatabaseModule {}
