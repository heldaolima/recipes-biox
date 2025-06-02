import { RecipeRepository } from 'src/domain/repositories/recipe-repository';

export class GetRecipeByIdUseCase {
  constructor(private readonly recipeRepository: RecipeRepository) {}

  public async execute(id: string) {
    return this.recipeRepository.findById(id);
  }
}
