import { Module } from '@nestjs/common';
import { RecipeRepositoryInMemory } from 'src/infrastructure/repositories/recipe-repository-in-memory';
import { RecipeController } from './presentation/http/controllers/recipe-controller';
import { CreateRecipeUseCase } from './application/use-cases/recipe/create-recipe-use-case';
import { GetAllRecipesUseCase } from './application/use-cases/recipe/get-all-recipes-use-case';
import { GetRecipeByIdUseCase } from './application/use-cases/recipe/get-recipe-by-id-use-case';

@Module({
  controllers: [RecipeController],
  providers: [
    CreateRecipeUseCase,
    GetAllRecipesUseCase,
    GetRecipeByIdUseCase,
    {
      provide: 'RECIPE_REPOSITORY',
      useClass: RecipeRepositoryInMemory,
    },
  ],
  exports: ['RECIPE_REPOSITORY'],
})
export class RecipeModule {}
