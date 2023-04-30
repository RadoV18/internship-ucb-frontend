import {ApplicantSummaryDto} from "./applicant.summary.dto";

export interface ActiveInternshipDto {
  id: string;
  title: string;
  dateFrom: Date;
  dateTo: Date;
  city: string;
  applicants: ApplicantSummaryDto;
}