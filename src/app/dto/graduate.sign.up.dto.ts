export interface GraduateSignUpDto {
    person: {
        user: {
            email: string;
            password: string;
        }
        firstName: string;
        lastName: string;
        ci: string;
        phoneNumber: string;
    }
    campusMajorId: number;
    graduationDate: Date;
}