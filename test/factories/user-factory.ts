import { User } from '@app/entities/user';
import { faker } from '@faker-js/faker';

type Override = Partial<User>;

export function makeUser(override: Override = {}): User {
  return new User({
    avatar: faker.image.avatar(),
    companyId: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    ...override,
  });
}
