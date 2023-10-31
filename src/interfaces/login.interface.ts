import { z } from "zod";
import { userLoginSchema } from "../schemas/login.shema";

export type UserLogin = z.infer<typeof userLoginSchema>;
export type ReturnLogin = { token: string };
