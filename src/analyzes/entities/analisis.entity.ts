import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { UserTestEntity } from '../../users/entities/user-test.entity';
import { UserEntity } from '../../users/entities/user.entity';

@Table({
  modelName: 'analisis',
  paranoid: true,
})
export class AnalisisEntity extends Model {
  id: number;

  @ForeignKey(() => UserEntity)
  @Column
  userId: number;

  @HasMany(() => UserTestEntity)
  userTests: UserTestEntity[];

  @BelongsTo(() => UserEntity)
  user: UserEntity;
}
