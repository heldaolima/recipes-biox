import { RecipeRepository } from 'src/domain/repositories/recipe-repository';
import { GetRecipeByIdUseCase } from './get-recipe-by-id-use-case';
import { Recipe } from 'src/domain/entities/recipe';

describe('GetRecipeByIdUseCase', () => {
  let getRecipeByIdUseCase: GetRecipeByIdUseCase;
  let mockRecipeRepository: jest.Mocked<RecipeRepository>;

  beforeEach(() => {
    mockRecipeRepository = {
      findById: jest.fn(),
      create: jest.fn(),
      findAll: jest.fn(),
      count: jest.fn(),
    };

    getRecipeByIdUseCase = new GetRecipeByIdUseCase(mockRecipeRepository);
  });

  it('should return the correct recipe if the id is found', async () => {
    const recipe = new Recipe(
      '1',
      'Valid title',
      'Valid description',
      ['ingr1', 'ingr2'],
      new Date(),
      new Date(),
    );

    mockRecipeRepository.findById.mockResolvedValue(recipe);

    const result = await getRecipeByIdUseCase.execute('1');
    expect(result).toEqual(recipe);
    expect(mockRecipeRepository.findById).toHaveBeenCalledWith('1');
  });

  it('should return null if the id is not found', async () => {
    mockRecipeRepository.findById.mockResolvedValue(null);

    const result = await getRecipeByIdUseCase.execute('1');
    expect(result).toBeNull();
    expect(mockRecipeRepository.findById).toHaveBeenCalledWith('1');
  });
});
