import { IsString } from 'class-validator';

export class LoginDTO {
  constructor(partial: Partial<LoginDTO>) {
    Object.assign(this, partial);
  }

  @IsString()
  access_token: string;

  @IsString()
  refresh_token: string;
}
