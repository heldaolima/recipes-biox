import { RecipeRepository } from 'src/domain/repositories/recipe-repository';

export class GetAllRecipesUseCase {
  constructor(private readonly recipeRepository: RecipeRepository) { }

  public async execute() {
    return await this.recipeRepository.findAll();
  }
}
