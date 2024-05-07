import { IsInt, IsNumber, IsPositive } from 'class-validator';

export class OrderItemDto {
  @IsNumber()
  @IsPositive()
  @IsInt()
  productId: number;

  @IsNumber()
  @IsPositive()
  @IsInt()
  quantity: number;

  @IsNumber()
  @IsPositive()
  price: number;
}
