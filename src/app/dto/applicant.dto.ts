export interface ApplicantDto {
  id: number;
  firstName: string;
  lastName: string;
  major: string;
  email: string;
  submittedOn: Date;
  status: string;
  cvUrl: string;
  profilePictureUrl: string;
}