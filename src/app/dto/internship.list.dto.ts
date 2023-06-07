export class InternshipListDto {
  internshipId: number;
  title: string;
  description: string;
  city: string;
  startingDate: Date;
  endingDate: Date;
  institution: string;
  url: string;
  constructor(
    id: number,
    title: string,
    description: string,
    city: string,
    startingDate: Date,
    endingDate: Date,
    institution: string,
    url: string
  ) {
    this.internshipId = id;
    this.title = title;
    this.description = description;
    this.city = city;
    this.startingDate = startingDate;
    this.endingDate = endingDate;
    this.institution = institution;
    this.url = url;
  }
}
