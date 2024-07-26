import { Transform } from 'class-transformer';
import { IsString, IsInt, IsNumber } from 'class-validator';

export class CreateCatDto {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  name: Boolean;
}
