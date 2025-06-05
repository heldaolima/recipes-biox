import { RecipeRepository } from 'src/domain/repositories/recipe-repository';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class GetAllRecipesUseCase {
  constructor(
    @Inject('RECIPE_REPOSITORY')
    private readonly recipeRepository: RecipeRepository,
  ) {}

  public async execute() {
    return await this.recipeRepository.findAll();
  }
}
