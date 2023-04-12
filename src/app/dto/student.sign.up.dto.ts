export interface StudentSignUpDto {
    personDto: {
        signupRequestDto: {
            email: string;
            password: string;
            s3_profile_picture: File;
        }
        firstName: string;
        lastName: string;
        ci: string;
        phoneNumber: string;
        s3_cv: File
    }
    campusMajorId: number;
    semester: number;
}