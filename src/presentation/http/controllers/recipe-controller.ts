import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateRecipeUseCase } from 'src/application/use-cases/recipe/create-recipe-use-case';
import { CreateRecipeDTO } from '../dtos/create-recipe-dto';
import { RecipeRepositoryInMemory } from 'src/infrastructure/repositories/recipe-repository-in-memory';
import { GetRecipeByIdUseCase } from 'src/application/use-cases/recipe/get-recipe-by-id-use-case';
import { GetAllRecipesUseCase } from 'src/application/use-cases/recipe/get-all-recipes-use-case';
import { RecipeHttpPresenter } from '../presenters/recipe-presenter';

@Controller('recipes')
export class RecipeController {
  private readonly createRecipeUseCase: CreateRecipeUseCase;
  private readonly getRecipeByIdUseCase: GetRecipeByIdUseCase;
  private readonly getAllRecipesUseCase: GetAllRecipesUseCase;

  constructor(private readonly repo: RecipeRepositoryInMemory) {
    this.createRecipeUseCase = new CreateRecipeUseCase(this.repo);
    this.getRecipeByIdUseCase = new GetRecipeByIdUseCase(this.repo);
    this.getAllRecipesUseCase = new GetAllRecipesUseCase(this.repo);
  }

  @Post()
  async create(@Body() dto: CreateRecipeDTO) {
    const recipe = await this.createRecipeUseCase.execute(dto);
    return new RecipeHttpPresenter(recipe);
  }

  @Get(':id')
  async index(@Param('id') id: string) {
    const recipe = await this.getRecipeByIdUseCase.execute(id);
    if (!recipe) {
      throw new NotFoundException('Recipe not found');
    }
    return new RecipeHttpPresenter(recipe);
  }

  @Get()
  async show() {
    const recipes = await this.getAllRecipesUseCase.execute();
    return recipes.map((recipe) => new RecipeHttpPresenter(recipe));
  }
}
