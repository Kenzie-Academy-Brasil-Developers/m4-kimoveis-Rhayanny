import { Router } from "express";
import { CategoryCreateSchema } from "../schemas/category.schema";
import { validateBody, verifyAdmin, verifyToken } from "../middlewares/globals";
import {
  verifyCategorieExists,
  verifyUniqueCategorieName,
} from "../middlewares/categories";
import {
  createCategoryController,
  readCategoryController,
  readRealEstateByCategoryController,
} from "../controllers/category.controler";

export const categoryRoutes: Router = Router();

categoryRoutes.post(
  "/",
  validateBody(CategoryCreateSchema),
  verifyToken,
  verifyUniqueCategorieName,
  verifyAdmin,
  createCategoryController
);
categoryRoutes.get("/", readCategoryController);
categoryRoutes.get(
  "/:id/realEstate",
  verifyCategorieExists,
  readRealEstateByCategoryController
);
