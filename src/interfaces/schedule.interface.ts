import { z } from "zod";
import { ScheduleCreateSchema } from "../schemas/schedules.schemas";
import { Repository } from "typeorm";
import { Schedule } from "../entities";

export type CreateSchedule = z.infer<typeof ScheduleCreateSchema>;
export type ScheduleRepo = Repository<Schedule>;
