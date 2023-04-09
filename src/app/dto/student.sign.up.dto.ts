export interface StudentSignUpDto {
    personDto: {
        signupRequestDto: {
            email: string;
            password: string;
        }
        firstName: string;
        lastName: string;
        ci: string;
        phoneNumber: string;
    }
    campusMajorId: number;
    semester: number;
}
