export interface GraduateSignUpDto {
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
    graduationDate: number;
}
