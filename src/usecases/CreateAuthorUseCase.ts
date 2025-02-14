import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CreateAuthorUseCase {
  async execute(name: string) {
    return await prisma.author.create({
      data: { name },
    });
  }

  async getAll() {
    return await prisma.author.findMany();
  }
}
