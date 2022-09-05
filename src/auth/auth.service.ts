import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtTokenType } from 'src/types/JwtTokenType';
import { UserDTO } from 'src/users/dto/out/user.dto';
import { UsersService } from '../users/users.service';
import { AccessTokenDto } from './dto/out/access-token.dto';
import { LoginDTO } from './dto/out/login-dto';
import { RefreshDTO } from './dto/out/refresh.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<UserDTO | null> {
    const user = await this.usersService.findOneByEmail(username);

    const isCurrentPassword = await this.usersService.comparePassword(
      pass,
      user.password,
    );

    if (isCurrentPassword) {
      return user;
    }

    return null;
  }

  async login(user: UserDTO): Promise<LoginDTO> {
    const newToken = this.makeJwtToken(user, 'new');
    const refreshToken = this.makeJwtToken(user, 'refresh');

    this.usersService.userUpdateRefreshToken(user.id, refreshToken);

    return new LoginDTO({
      tokens: {
        access_token: newToken,
        refresh_token: refreshToken,
      },
      user,
    });
  }

  async refreshToken(token: string): Promise<RefreshDTO> {
    const user = await this.usersService.findOneByRefreshToken(token);
    const newToken = this.makeJwtToken(user, 'new');
    const refreshToken = this.makeJwtToken(user, 'refresh');
    this.usersService.userUpdateRefreshToken(user.id, refreshToken);

    return new RefreshDTO({
      access_token: newToken,
      refresh_token: refreshToken,
    });
  }

  makeJwtToken(user: UserDTO, tokenType: 'new' | 'refresh'): string {
    const payload = { username: user.name, uuid: user.userUUID };
    return this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET_KEY,
      expiresIn: tokenType === 'new' ? '15m' : '30d',
    });
  }
}
