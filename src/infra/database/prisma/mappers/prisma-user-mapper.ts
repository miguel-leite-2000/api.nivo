import { User } from '@app/entities/user';
import { User as RawUser } from '@prisma/client';

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      companyId: user.companyId,
      name: user.name,
      email: user.email,
      password: user.password,
    };
  }

  static toDomain(raw: RawUser): User {
    return new User(
      {
        companyId: raw.companyId,
        name: raw.name,
        email: raw.email,
        password: raw.password,
      },
      raw.id,
    );
  }

  static toDomainList(raw: RawUser[]): User[] {
    return raw.map((user) => this.toDomain(user));
  }
}
