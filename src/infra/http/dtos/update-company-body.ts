import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class UpdateCompanyBody {
  @IsNotEmpty()
  @Length(14, 14)
  @ApiProperty({
    example: 'Company name',
    description: `Enter the name of the company.`,
  })
  company: string;

  @IsNotEmpty()
  @ApiProperty({
    example: 'company.com',
    description: `Enter the domain of the company.`,
  })
  domain: string;
}
