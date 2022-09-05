import { USER_ENTITY, USER_TEST_ENTITY } from 'src/global/entities-name';
import { UserTestEntity } from './entities/user-test.entity';
import { UserEntity } from './entities/user.entity';

export const usersProviders = [
  {
    provide: USER_ENTITY,
    useValue: UserEntity,
  },
  {
    provide: USER_TEST_ENTITY,
    useValue: UserTestEntity,
  },
];
