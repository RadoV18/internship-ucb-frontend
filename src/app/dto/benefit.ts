export class Benefit {
  id: number;
  description: string;

  constructor(id: number, benefit: string) {
    this.id = id;
    this.description = benefit;
  }
}
