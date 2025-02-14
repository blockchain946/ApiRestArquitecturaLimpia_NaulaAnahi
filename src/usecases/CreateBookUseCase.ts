import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CreateBookUseCase {
  async execute(title: string, authorId: number) {
    return await prisma.book.create({
      data: { title, authorId },
    });
  }

  async getAll() {
    return await prisma.book.findMany({
      include: { author: true },
    });
  }
}
