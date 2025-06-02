import { Recipe } from 'src/domain/entities/recipe';
import { RecipeRepository } from 'src/domain/repositories/recipe-repository';
import { CreateRecipeDTO } from 'src/presentation/http/dtos/create-recipe-dto';

export class CreateRecipeUseCase {
  constructor(private readonly recipeRepository: RecipeRepository) { }

  public async execute(dto: CreateRecipeDTO) {
    const count = await this.recipeRepository.count();

    const recipe = new Recipe(
      String(count + 1),
      dto.title,
      dto.description,
      dto.ingredients,
      new Date(),
      new Date(),
    );

    await this.recipeRepository.create(recipe);

    return recipe;
  }
}
