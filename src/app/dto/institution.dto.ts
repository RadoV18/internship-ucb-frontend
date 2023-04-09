import { UserUcbDto } from "./user.ucb.dto";

export interface InstitutionDto {
  institutionId: number;
  name: string;
  description: string;
  area: string;
  contactFirstName: string;
  contactLastName: string;
  contactEmail: string;
  contactPhone: string;
  userUcb : UserUcbDto;
}