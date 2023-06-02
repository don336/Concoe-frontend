import { Router } from "express";
import { checkAuth } from "../../../middleware/checkAuth";

import Controller from "../../../contoroller/Article";
import validation from "../../../middleware/validation";

const articleRoute = Router();

articleRoute.get("/", Controller.getArticles);
articleRoute.get("/:id", checkAuth, Controller.getArticle);
articleRoute.post(
  "/",
  checkAuth,
  validation.saveVlidation,
  Controller.PostArticle
);
articleRoute.put("/:id", checkAuth, Controller.updateArticle);
articleRoute.delete("/:id", checkAuth, Controller.deleteArticle);

export default articleRoute;
