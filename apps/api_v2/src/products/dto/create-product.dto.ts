import { IsString, IsNumber, IsOptional, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Wireless Headphones' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: 'High-quality headphones' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 79.99 })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiPropertyOptional({ example: 'Electronics' })
  @IsString()
  @IsOptional()
  category?: string;

  @ApiProperty({ example: 150 })
  @IsNumber()
  @Min(0)
  stock: number;
}