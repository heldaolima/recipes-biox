import { Module } from '@nestjs/common';
import { RecipeRepositoryInMemory } from 'src/infrastructure/repositories/recipe-repository-in-memory';
import { RecipeController } from './presentation/http/controllers/recipe-controller';

@Module({
  controllers: [RecipeController],
  providers: [RecipeRepositoryInMemory],
})
export class RecipeModule { }
