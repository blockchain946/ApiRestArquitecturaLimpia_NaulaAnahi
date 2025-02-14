import { Request, Response } from "express";
import { CreateBookUseCase } from "../usecases/CreateBookUseCase";

export class BookController {
  async create(req: Request, res: Response) {
    const useCase = new CreateBookUseCase();
    const book = await useCase.execute(req.body.title, Number(req.body.authorId));
    res.status(201).json(book);
  }

  async getAll(req: Request, res: Response) {
    const useCase = new CreateBookUseCase();
    const books = await useCase.getAll();
    res.json(books);
  }
}
