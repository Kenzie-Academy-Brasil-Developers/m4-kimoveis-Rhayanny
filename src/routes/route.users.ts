import { Router } from "express";

import { createUserSchema, updateUserSchema } from "../schemas/users.schema";
import {
  createUserController,
  deleteUserController,
  readUserController,
  updateUserController,
} from "../controllers/user.controler";
import {
  validateBody,
  verifyAdmin,
  verifyPermissions,
  verifyToken,
} from "../middlewares/globals";
import { verifyUniqueUserEmail, verifyUserExists } from "../middlewares/users";

export const usersRoutes: Router = Router();

usersRoutes.post(
  "/",
  validateBody(createUserSchema),
  verifyUniqueUserEmail,
  createUserController
);

usersRoutes.get("/", verifyToken, verifyAdmin, readUserController);

usersRoutes.patch(
  "/:id",
  verifyToken,
  verifyUserExists,
  verifyPermissions,
  validateBody(updateUserSchema),
  updateUserController
);

usersRoutes.delete(
  "/:id",
  verifyToken,
  verifyUserExists,
  verifyAdmin,
  verifyPermissions,
  deleteUserController
);
