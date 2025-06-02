export class Recipe {
  constructor(
    public readonly id: string,
    public title: string,
    public description: string,
    public ingredients: Array<string>,
    public readonly createdAt: Date,
    public updatedAt: Date,
  ) {}
}
