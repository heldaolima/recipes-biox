import { RecipeRepositoryInMemory } from 'src/infrastructure/repositories/recipe-repository-in-memory';

export class GetAllRecipesUseCase {
  constructor(private readonly recipeRepository: RecipeRepositoryInMemory) {}

  public async execute() {
    return await this.recipeRepository.findAll();
  }
}
