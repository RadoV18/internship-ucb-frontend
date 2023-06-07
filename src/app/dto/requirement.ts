export class Requirement {
  id: number;
  description: string;

  constructor(id: number, requirement: string) {
    this.id = id;
    this.description = requirement;
  }
}
