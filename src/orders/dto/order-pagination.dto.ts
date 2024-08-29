import { IsEnum, IsOptional } from 'class-validator';

import { PaginationDto } from '../../common/dtos/pagination.dto';
import { OrderStatus } from '../enums/order-status.enum';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatus)
  status: OrderStatus;
}
