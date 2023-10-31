import { Router } from "express";
import { usersRoutes } from "./route.users";
import { categoryRoutes } from "./route.category";
import { realEstateRoutes } from "./route.realEstate";
import { schedulesRoutes } from "./route.schedules";
import { loginRoutes } from "./route.login";

export const routes: Router = Router();
routes.use("/users", usersRoutes);
routes.use("/login", loginRoutes);
routes.use("/categories", categoryRoutes);
routes.use("/realEstate", realEstateRoutes);
routes.use("/schedules", schedulesRoutes);
