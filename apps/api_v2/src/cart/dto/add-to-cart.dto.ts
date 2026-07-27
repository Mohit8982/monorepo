import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class AddToCartDto {
  @IsString()
  @IsNotEmpty()
  productId: string;

  @IsNumber()
  @IsPositive()
  quantity: number;
}
