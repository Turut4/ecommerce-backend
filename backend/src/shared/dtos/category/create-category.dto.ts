import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;
 
  @IsOptional()
  @IsString({ each: true })
  productsId: string[];
}
