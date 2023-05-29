export class QuestionsDto {
  id: number;
  description: string;

  constructor(id: number, question: string) {
    this.id = id;
    this.description = question;
  }
}
