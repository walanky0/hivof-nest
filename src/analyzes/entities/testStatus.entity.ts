import {
  AllowNull,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';
import { TestEntity } from './test.entity';

@Table({
  modelName: 'test-status',
  paranoid: true,
})
export class TestStatusEntity extends Model {
  id: number;

  @AllowNull(false)
  @Unique
  @Column
  title: string;

  @AllowNull(false)
  @Column
  needNotification: boolean;

  @ForeignKey(() => TestEntity)
  @Column
  testId: number;

  @BelongsTo(() => TestEntity)
  test: TestEntity;
}
