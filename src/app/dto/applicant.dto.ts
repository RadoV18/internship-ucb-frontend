import {QuestionResponseDto} from "./question.response.dto";

export interface ApplicantDto {
  id: number;
  applicationId: number;
  firstName: string;
  lastName: string;
  major: string;
  email: string;
  submittedOn: Date;
  status: string;
  cvUrl: string;
  profilePictureUrl: string;
  questionResponses: Array<QuestionResponseDto>;
}