import { Request, Response } from "express";
import { CreateAuthorUseCase } from "../usecases/CreateAuthorUseCase";

export class AuthorController {
  async create(req: Request, res: Response) {
    const useCase = new CreateAuthorUseCase();
    const author = await useCase.execute(req.body.name);
    res.status(201).json(author);
  }

  async getAll(req: Request, res: Response) {
    const useCase = new CreateAuthorUseCase();
    const authors = await useCase.getAll();
    res.json(authors);
  }
}
