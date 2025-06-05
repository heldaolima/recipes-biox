import { RecipeRepository } from 'src/domain/repositories/recipe-repository';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class GetRecipeByIdUseCase {
  constructor(
    @Inject('RECIPE_REPOSITORY')
    private readonly recipeRepository: RecipeRepository,
  ) {}

  public async execute(id: string) {
    return this.recipeRepository.findById(id);
  }
}
