import { User } from '@app/entities/user';
import { UserRepository } from '@app/repositories/user-repository';

export class InMemoryUserRepository implements UserRepository {
  public users: User[] = [];
  async find(id: string): Promise<User | null> {
    const user = this.users.find((item) => item.id === id);

    if (!user) {
      return null;
    }

    return user;
  }
  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((item) => item.email === email);

    if (!user) {
      return null;
    }

    return user;
  }
  async all(): Promise<User[]> {
    return this.users;
  }
  async create(user: User): Promise<void> {
    this.users.push(user);
  }
  async save(user: User): Promise<void> {
    const userIndex = this.users.findIndex((item) => item.id === user.id);

    if (userIndex >= 0) {
      this.users[userIndex] = user;
    }
  }
  async delete(id: string): Promise<User> {
    const index = this.users.findIndex((user) => user.id === id);

    const deleteduser = this.users.splice(index, 1)[0];
    return Promise.resolve(deleteduser);
  }
}
