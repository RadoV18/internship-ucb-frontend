import { Person } from "./person";

export interface Graduate{
  graduateId: number;
  graduationDate: String;
  campusMajorId: number;
  status: number;
  person: Person;

}
