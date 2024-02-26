import { PrismaService } from '../prisma.service';
import { UserRepository } from '@app/repositories/user-repository';
import { User } from '@app/entities/user';
import { PrismaUserMapper } from '../mappers/prisma-user-mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}
  async find(id: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: { id },
    });

    if (!user) {
      return null;
    }

    return PrismaUserMapper.toDomain(user);
  }
  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      return null;
    }

    return PrismaUserMapper.toDomain(user);
  }
  async all(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return PrismaUserMapper.toDomainList(users);
  }
  async create(user: User): Promise<void> {
    await this.prisma.user.create({
      data: PrismaUserMapper.toPrisma(user),
    });
  }
  async save(user: User): Promise<void> {
    await this.prisma.user.updateMany({
      where: { id: user.id },
      data: PrismaUserMapper.toPrisma(user),
    });
  }
  async delete(id: string): Promise<User> {
    const user = await this.prisma.user.delete({
      where: { id },
    });
    return PrismaUserMapper.toDomain(user);
  }
}
