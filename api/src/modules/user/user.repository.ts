import { Database } from '@tscc/core';
import { Usermodel } from './user.model';

export class UserRepository {
  constructor(protected db: Database<Usermodel>) {}

  async getAll() {
    return this.db.readAll();
  }

  async get(id: string) {
    return this.db.read(id);
  }

  async create(input: Usermodel) {
    return this.db.insert(input);
  }

  async update(input: Usermodel) {
    return this.db.update(input);
  }

  async delete(id: string) {
    return this.db.delete(id);
  }
}
