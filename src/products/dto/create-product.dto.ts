import { IsString, IsNumber, Min } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  @Transform(({ value }) => value.trim())
  name: string;

  @IsNumber({
    maxDecimalPlaces: 4,
  })
  @Min(0)
  @Type(() => Number)
  price: number;
}
