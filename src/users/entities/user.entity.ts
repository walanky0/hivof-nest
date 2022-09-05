import {
  AllowNull,
  Column,
  DataType,
  Default,
  HasMany,
  IsEmail,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { AnalisisEntity } from '../../analyzes/entities/analisis.entity';
import { UserTestEntity } from './user-test.entity';

@Table({
  modelName: 'user',
  paranoid: true,
})
export class UserEntity extends Model<UserEntity> {
  id: number;

  @AllowNull(false)
  @Default(DataTypes.UUIDV4)
  @Column(DataType.UUID)
  userUUID: string;

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @IsEmail
  @Unique
  @Column
  email: string;

  @AllowNull(false)
  @Column
  password: string;

  @AllowNull(false)
  @Column
  surname: string;

  @AllowNull(false)
  @Column
  patronymic: string;

  @AllowNull(false)
  @Column
  birthday: Date;

  @Column
  refreshToken: string;

  @HasMany(() => AnalisisEntity)
  analisis: AnalisisEntity[];

  @HasMany(() => UserTestEntity)
  userTests: UserTestEntity[];
}
