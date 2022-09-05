import { Exclude } from 'class-transformer';

export class UserDTO {
  constructor(partial: Partial<UserDTO>) {
    Object.assign(this, partial);
  }

  @Exclude()
  id: number;
  userUUID: string;

  name: string;

  email: string;

  surname: string;

  patronymic: string;

  birthday: Date;

  @Exclude()
  password: string;

  @Exclude()
  refreshToken: string;
}
