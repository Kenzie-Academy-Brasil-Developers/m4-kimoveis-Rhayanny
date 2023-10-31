import { Router } from "express";
import {
  createRealEstateController,
  readAllRealEstateController,
} from "../controllers/realEstate.controler";
import { validateBody, verifyAdmin, verifyToken } from "../middlewares/globals";
import { RealEstateCreateSchema } from "../schemas/realEstate.schema";
import { verifyAddressExists } from "../middlewares/realEstates";

export const realEstateRoutes: Router = Router();

realEstateRoutes.post(
  "/",
  verifyToken,
  verifyAdmin,
  validateBody(RealEstateCreateSchema),
  verifyAddressExists,
  createRealEstateController
);
realEstateRoutes.get("/", readAllRealEstateController);
