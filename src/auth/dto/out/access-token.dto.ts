import { IsString } from 'class-validator';

export class AccessTokenDto {
  constructor(partial: Partial<AccessTokenDto>) {
    Object.assign(this, partial);
  }

  @IsString()
  access_token: string;
}
