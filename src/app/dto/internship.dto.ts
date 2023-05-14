export interface InternshipDto {
    internshipId: number,
    institutionId: number,
    cityId: number,
    title: string,
    description: string,
    isApproved: string,
    startingDate: Date,
    endingDate: Date,
    status: true,
    internshipBenefits: [{
        description: string;
        status: number;
        benefitId: number;
    }];
    internshipRequirements: [{
        requirementId: number;
        description: string;
        status: number;
    }];
    internshipRoles: [{
        internshipRoleId: number;
        description: string;
        status: number;
    }];
    majorList: [{
        internshipMajorId: number;
        major: {
            majorId: number;
            name: string;
            status: number;
        },
        status: number;
    }];
    internshipQuestions: [{
        internshipQuestionId: number;
        question: string;
        status: boolean;
    }];
}