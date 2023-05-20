export interface CampusDto {
    campusId: number;
    name: string;
    majors: [MajorCustomDto]
}

export interface MajorCustomDto {
    campusMajorId: number;
    name: string;
}