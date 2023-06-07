export interface Internship {
  internshipId: number;
  institution: String;
  profilePicture: String;
  title: String;
  description: String;
  city: String;
  startingDate: Date;
  endingDate: Date;
  internshipBenefits: Array<String>
  internshipRequirements: Array<String>
  internshipRoles: Array<String>
  internshipQuestions: Array<String>
  majorList: Array<String>
}