import { Transform } from 'class-transformer';
import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class LogingUserDto {
  @IsString()
  @IsEmail()
  @Transform(({ value }) => value.trim().toLowerCase()) // transforma los datos antes de aplicar las validaciones
  email: string;

  @IsString()
  @IsStrongPassword()
  @Transform(({ value }) => value.trim())
  password: string;
}
