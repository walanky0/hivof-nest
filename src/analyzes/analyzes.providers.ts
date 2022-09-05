import {
  ANALISIS_ENTITY,
  TEST_ENTITY,
  TEST_STATUS_ENTITY,
} from 'src/global/entities-name';
import { AnalisisEntity } from './entities/analisis.entity';
import { TestEntity } from './entities/test.entity';
import { TestStatusEntity } from './entities/TestStatus.entity';

export const analyzesProviders = [
  {
    provide: ANALISIS_ENTITY,
    useValue: AnalisisEntity,
  },
  {
    provide: TEST_ENTITY,
    useValue: TestEntity,
  },
  {
    provide: TEST_STATUS_ENTITY,
    useValue: TestStatusEntity,
  },
];
