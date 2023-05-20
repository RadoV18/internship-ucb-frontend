import { Person } from "./person";
import { MajorDto } from "./major.dto";
import {CampusDto} from "./campus.dto";

export interface Graduate {
  graduateId: number;
  graduationDate: Date;
  campusMajorId: number;
  status: number;
  person: Person;
  major: MajorDto;
  campus: CampusDto;
}
