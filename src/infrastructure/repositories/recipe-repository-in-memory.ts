import { Recipe } from 'src/domain/entities/recipe';
import { RecipeRepository } from 'src/domain/repositories/recipe-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RecipeRepositoryInMemory implements RecipeRepository {
  private recipes: Array<Recipe> = [];
  private recipesCount: number = 0;

  async create(recipe: Recipe): Promise<void> {
    this.recipes.push(recipe);
    this.recipesCount++;
  }

  async findAll(): Promise<Array<Recipe>> {
    return this.recipes;
  }

  async findById(id: string): Promise<Recipe | null> {
    const recipe = this.recipes.find((recipe) => recipe.id === id);
    return recipe ? recipe : null;
  }

  async count(): Promise<number> {
    return this.recipesCount;
  }
}
