import {
  AllowNull,
  Column,
  HasMany,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';
import { TestStatusEntity } from './TestStatus.entity';

@Table({
  modelName: 'test',
  paranoid: true,
})
export class TestEntity extends Model {
  id: number;

  @AllowNull(false)
  @Unique
  @Column
  title: string;

  @HasMany(() => TestStatusEntity)
  testStatuses: TestStatusEntity[];
}
