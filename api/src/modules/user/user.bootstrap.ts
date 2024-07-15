import { Database } from '@tscc/core';
import { UserController } from './user.controller';
import { v4 as uuidv4 } from 'uuid';
import { UserRepository } from './user.repository';
import { Usermodel } from './user.model';

const db = new Database<Usermodel>('users', {
  defualtData: [
    {
      id: uuidv4(),
      username: 'firstuser',
      password: 'password',
      email: 'firstmail@email.com',
    },
  ],
});

const userRepository = new UserRepository(db);
export const userController = new UserController(userRepository);
