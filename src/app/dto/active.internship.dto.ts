import { ApplicantSummaryDto } from "./applicant.summary.dto";
import { Timestamp } from "rxjs";

export interface ActiveInternshipDto {
  id: number;
  title: string;
  dateFrom: Date;
  dateTo: Date;
  city: string;
  applicants: ApplicantSummaryDto;
}