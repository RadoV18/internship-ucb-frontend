export class Role {
  id: number;
  description: string;

  constructor(id: number, role: string) {
    this.id = id;
    this.description = role;
  }
}
