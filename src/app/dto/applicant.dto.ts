export interface ApplicantDto {
  id: number;
  name: string;
  major: string;
  email: string;
  submittedOn: Date;
  status: string;
  cvUrl: string;
}