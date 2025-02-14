import express from "express";
import { AuthorController } from "../adapters/AuthorController";
import { BookController } from "../adapters/BookController";

const app = express();
app.use(express.json());

const authorController = new AuthorController();
const bookController = new BookController();

app.post("/authors", authorController.create);
app.get("/authors", authorController.getAll);
app.post("/books", bookController.create);
app.get("/books", bookController.getAll);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
