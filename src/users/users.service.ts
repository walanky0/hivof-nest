import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { USER_ENTITY } from 'src/global/entities-name';
import { CreateUserDTO } from './dto/in/create-user.dto';
import { UserDTO } from './dto/out/user.dto';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtTokenType } from 'src/types/JwtTokenType';
@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_ENTITY) private readonly userRepository: typeof UserEntity,
  ) {}

  async findOneByEmail(email: string): Promise<UserDTO> {
    const user = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Пользователь не найден');
    }

    return new UserDTO(user.get());
  }

  async findOneByUUID(token: JwtTokenType): Promise<UserDTO> {
    const user = await this.userRepository.findOne({
      where: {
        userUUID: token.uuid,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Пользователь не найден');
    }

    return new UserDTO(user.get());
  }

  async findOneByRefreshToken(token: string): Promise<UserDTO> {
    const user = await this.userRepository.findOne({
      where: {
        refreshToken: token,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Пользователь не найден');
    }

    return new UserDTO(user.get());
  }

  async userUpdateRefreshToken(userId: number, token: string) {
    const user = await this.userRepository.findByPk(userId);

    if (!user) {
      return false;
    }
    user.refreshToken = token;
    await user.save();
    return true;
  }

  async create(userData: CreateUserDTO) {
    const [user, created] = await this.userRepository.findOrBuild({
      where: {
        email: userData.email,
      },
      defaults: {
        name: userData.name,
        surname: userData.surname,
        patronymic: userData.patronymic,
        birthday: userData.birthday,
      },
    });

    if (!created) {
      throw new HttpException(
        'Пользователь с данным e-mail уже существует',
        HttpStatus.FORBIDDEN,
      );
    }
    const hashPassword = await this.hashPassword(userData.password);
    user.password = hashPassword;
    const currentUser = await user.save();
    return new UserDTO(currentUser.get());
  }

  hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  comparePassword(hashPassword: string, password: string): Promise<boolean> {
    return bcrypt.compare(hashPassword, password);
  }
}
