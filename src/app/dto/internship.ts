export interface Internship {
    internshipId: number;
    institutionId: String;
    title: String;
    description: String;
    city: String;
    startingDate:String;
    endingDate: String;
    internshipBenefits:Array<String>
    internshipRequirements: Array<String>
    internshipRoles:Array<String>
    majorList:Array<String>
}