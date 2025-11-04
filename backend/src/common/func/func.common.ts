import { PrismaService } from '../../prisma/prisma.service';

export class CommonFunc {
  constructor(private readonly prismaService: PrismaService) {}

  // get user with roles
  async getOwn(userId: string, objectId: string) {
    return await this.prismaService.owner.findUnique({
      where: { userId_objectId: { userId, objectId } },
    });
  }
}
