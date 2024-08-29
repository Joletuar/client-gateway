import { Type } from 'class-transformer';

import { ArrayMinSize, IsArray, ValidateNested } from 'class-validator';
import { OrdenItemDto } from './order-item.dto';

export class CreateOrderDto {
  @IsArray() // Validar que sea un array
  @ArrayMinSize(1) // Validar que tenga mínimo un elemento
  @ValidateNested({ each: true }) // Validamos cada elemento
  @Type(() => OrdenItemDto) // transforma al tipo especificado
  items: Array<OrdenItemDto>;
}
