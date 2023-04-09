export interface StudentSignUpDto {
    personDto: {
        signupRequestDto: {
            username: string;
            email: string;
            password: string;
        }
        firstName: string;
        lastName: string;
        ci: string;
        phoneNumber: string;
        cv: string;
    }
    campusMajorId: number;
    semester: number;
}
