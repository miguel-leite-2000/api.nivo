import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';
import { CompanyController } from './controllers/company.controller';
import { CreateCompany } from '@app/use-cases/company/create-company';
import { GetAllCompanies } from '@app/use-cases/company/get-all-companies';
import { GetByIdCompany } from '@app/use-cases/company/get-by-id-company';
import { UpdateCompany } from '@app/use-cases/company/update-company';
import { DeleteCompany } from '@app/use-cases/company/delete-company';

@Module({
  imports: [DatabaseModule],
  controllers: [CompanyController],
  providers: [
    CreateCompany,
    GetAllCompanies,
    GetByIdCompany,
    UpdateCompany,
    DeleteCompany,
  ],
})
export class HttpModule {}
