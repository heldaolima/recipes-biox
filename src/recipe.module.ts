import { Module } from '@nestjs/common';
import { RecipeRepositoryInMemory } from 'src/infrastructure/repositories/recipe-repository-in-memory';
import { RecipeController } from './presentation/http/controllers/recipe-controller';

@Module({
  controllers: [RecipeController],
  providers: [{
    provide: 'RECIPE_REPOSITORY',
    useClass: RecipeRepositoryInMemory,
  }],
  exports: ['RECIPE_REPOSITORY'],
})
export class RecipeModule { }
