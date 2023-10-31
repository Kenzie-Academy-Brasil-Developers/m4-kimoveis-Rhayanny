import { userSchema } from "./users.schema";

export const userLoginSchema = userSchema.pick({
  email: true,
  password: true,
});
