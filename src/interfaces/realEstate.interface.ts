import { z } from "zod";
import { RealEstateCreateSchema } from "../schemas/realEstate.schema";
import { Repository } from "typeorm";
import { Address, RealEstate } from "../entities";

export type CreateRealEstate = z.infer<typeof RealEstateCreateSchema>;

export type RealEstateRepo = Repository<RealEstate>;
export type AddressRepo = Repository<Address>;
