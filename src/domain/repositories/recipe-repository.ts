import { Recipe } from '../entities/recipe';

export interface RecipeRepository {
  create(recipe: Recipe): Promise<void>;
  findById(id: string): Promise<Recipe | null>;
  findAll(): Promise<Array<Recipe>>;
  count(): Promise<number>;
}
