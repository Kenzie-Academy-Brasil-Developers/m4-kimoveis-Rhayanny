import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import User from "./users.entitiy";
import RealEstate from "./realEstates.entity";

@Entity("schedules")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  user: User;

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
  realEstate: RealEstate;
}

export default Schedule;
