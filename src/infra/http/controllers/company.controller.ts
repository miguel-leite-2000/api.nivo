import { CreateCompany } from '@app/use-cases/company/create-company';
import { DeleteCompany } from '@app/use-cases/company/delete-company';
import { GetAllCompanies } from '@app/use-cases/company/get-all-companies';
import { GetByIdCompany } from '@app/use-cases/company/get-by-id-company';
import { UpdateCompany } from '@app/use-cases/company/update-company';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CompanyViewModel } from '../view-models/company-view-model';
import { CreateCompanyBody } from '../dtos/create-company-body';
import { UpdateCompanyBody } from '../dtos/update-company-body';

@ApiTags('companies')
@Controller('companies')
export class CompanyController {
  constructor(
    private createCompany: CreateCompany,
    private getAllCompanies: GetAllCompanies,
    private getByIdCompany: GetByIdCompany,
    private updateCompany: UpdateCompany,
    private deleteCompany: DeleteCompany,
  ) {}

  @Get()
  async index() {
    const { companies } = await this.getAllCompanies.execute();
    return { companies: companies.map(CompanyViewModel.toHTTP) };
  }

  @Get('/:id')
  async show(@Param('id') id: string) {
    const { company } = await this.getByIdCompany.execute(id);
    if (!company) {
      return {};
    }
    return { company: CompanyViewModel.toHTTP(company) };
  }

  @Post()
  async create(@Body() body: CreateCompanyBody) {
    const { company } = await this.createCompany.execute(body);
    return { company: CompanyViewModel.toHTTP(company) };
  }

  @Put('/:id')
  async update(@Body() body: UpdateCompanyBody, @Param('id') id: string) {
    const { company } = await this.updateCompany.execute({ id, ...body });
    return { company: CompanyViewModel.toHTTP(company) };
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    const { company } = await this.deleteCompany.execute(id);
    return { company: CompanyViewModel.toHTTP(company) };
  }
}
