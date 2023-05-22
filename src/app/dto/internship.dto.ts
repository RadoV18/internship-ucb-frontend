export interface InternshipDto {
  internshipId: number,
  title: string,
  description: string,
  startingDate: Date,
  endingDate: Date,
  institution: {
    institutionId: number,
    name: string,
    description: string,
    area: string,
    contactFirstName: string,
    contactLastName: string,
    contactEmail: string,
    contactPhone: string,
    contactPosition: string,
    user: {
      userId: number,
      email: string,
      profilePicture: string,
    }
  },
  city: {
    cityId: number,
    name: string,
  },
  internshipBenefits: [{
      id: number;
      description: string;
  }];
  internshipRequirements: [{
    id: number;
    description: string;
  }];
  internshipRoles: [{
    id: number;
    description: string;
  }];
  internshipQuestions: [{
    id: number;
    description: string;
  }];
  majorList: [{
      majorId: number;
      name: string;
  }];
}