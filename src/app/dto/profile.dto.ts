export interface ProfileDto {
  personId: number;
  firstName: string;
  lastName: string;
  ci: string;
  phoneNumber: string;
  cvFile: File | null;
  profilePicture: string;
  semester: number;
  major: string;
  graduate: boolean;
  graduationDate: Date;
}
