import { Sequelize } from 'sequelize-typescript';
import { AnalisisEntity } from 'src/analyzes/entities/analisis.entity';
import { TestEntity } from 'src/analyzes/entities/test.entity';
import { TestStatusEntity } from 'src/analyzes/entities/TestStatus.entity';
import { UserTestEntity } from 'src/users/entities/user-test.entity';
import { UserEntity } from 'src/users/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        models: [
          UserEntity,
          TestEntity,
          TestStatusEntity,
          AnalisisEntity,
          UserTestEntity,
        ],
      });
      await sequelize.sync({ alter: true, force: false });
      return sequelize;
    },
  },
];
