import { UserDTO } from 'src/users/dto/out/user.dto';

export class LoginDTO {
  constructor(partial: Partial<LoginDTO>) {
    Object.assign(this, partial);
  }

  tokens: {
    access_token: string;
    refresh_token: string;
  };

  user: UserDTO;
}
