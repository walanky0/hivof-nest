import { ForeignKey, Model, Table } from 'sequelize-typescript';
import { TestEntity } from 'src/analyzes/entities/test.entity';
import { TestStatusEntity } from 'src/analyzes/entities/TestStatus.entity';
import { AnalisisEntity } from '../../analyzes/entities/analisis.entity';
import { UserEntity } from './user.entity';

@Table({
  modelName: 'user-test',
  paranoid: true,
})
export class UserTestEntity extends Model {
  id: number;

  @ForeignKey(() => TestEntity)
  testId: number;

  @ForeignKey(() => TestStatusEntity)
  testStatusId: number;

  @ForeignKey(() => UserEntity)
  userId: number;

  @ForeignKey(() => AnalisisEntity)
  analisisId: number;
}
