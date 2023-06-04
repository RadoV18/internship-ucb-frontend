export interface InternshipApplicationDto {
    internshipId: number;
    personId: number;
    internshipApplicationQuestions: InternshipAplicationQuestionDto[]
}

export interface InternshipAplicationQuestionDto {
    questionId: number;
    response: string;
}