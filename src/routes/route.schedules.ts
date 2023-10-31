import { Router } from "express";
import {
  createSchedulesController,
  readAllSchedulesRealEstateController,
} from "../controllers/schedules.controler";
import { validateBody, verifyAdmin, verifyToken } from "../middlewares/globals";
import { ScheduleCreateSchema } from "../schemas/schedules.schemas";
import {
  verifyRealEstateExists,
  verifyRealEstateSchedulesExists,
  verifyUserSchedulesExists,
} from "../middlewares/schedules";

export const schedulesRoutes: Router = Router();

schedulesRoutes.post(
  "/",
  verifyToken,
  validateBody(ScheduleCreateSchema),
  verifyRealEstateExists,
  verifyRealEstateSchedulesExists,
  verifyUserSchedulesExists,
  createSchedulesController
);
schedulesRoutes.get(
  "/realEstate/:id",
  verifyToken,
  verifyAdmin,
  readAllSchedulesRealEstateController
);
