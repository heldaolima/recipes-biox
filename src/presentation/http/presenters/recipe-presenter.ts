import { Recipe } from 'src/domain/entities/recipe';

export class RecipeHttpPresenter {
  public readonly id: string;
  public readonly title: string;
  public readonly ingredients: Array<string>;
  public readonly createdAt: Date;

  constructor(recipe: Recipe) {
    this.id = recipe.id;
    this.title = recipe.title;
    this.ingredients = recipe.ingredients;
    this.createdAt = recipe.createdAt;
  }
}
