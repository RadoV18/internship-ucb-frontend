export interface PersonDto {
  personId: number;
  firstName: string;
  lastName: string;
  ci: string;
  phoneNumber: string;
  cvFile: File | null;
}
