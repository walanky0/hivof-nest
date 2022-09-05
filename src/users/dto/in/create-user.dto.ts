import { Type } from 'class-transformer';
import { IsDate, IsEmail, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  surname: string;

  @IsString()
  patronymic: string;

  @IsDate()
  @Type(() => Date)
  birthday: Date;
}
