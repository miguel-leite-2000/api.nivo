import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsNotEmpty, Length } from 'class-validator';

export class CreateCompanyBody {
  @IsEmpty()
  @Length(14, 14)
  @ApiProperty({
    example: 'Company logo',
    description: `Enter the logo of the company.`,
  })
  logo: File;

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

  @IsNotEmpty()
  @ApiProperty({
    example: 'John Doe',
    description: `Enter the user name of the company.`,
  })
  name: string;

  @IsNotEmpty()
  @ApiProperty({
    example: 'john.doe@company.com',
    description: `Enter the user email of the company.`,
  })
  email: string;

  @IsNotEmpty()
  @ApiProperty({
    example: 'password123',
    description: `Enter the user password of the company.`,
  })
  password: string;
}
