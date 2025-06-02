import { Module } from '@nestjs/common';
import { RecipeModule } from './recipe.module';

@Module({
  imports: [RecipeModule],
})
export class AppModule { }
