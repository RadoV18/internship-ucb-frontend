export interface InternshipAplicationDto {
    internshipId: number;
    personId: number;
    internshipApplicationQuestionDtos: InternshipAplicationQuestionDto[]
}

export interface InternshipAplicationQuestionDto {
    internshipId: number;
    internshipQuestionId: number;
    response: string;
}