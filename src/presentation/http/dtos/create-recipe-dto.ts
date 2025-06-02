import { Length, ArrayNotEmpty, IsString, IsArray } from 'class-validator';

export class CreateRecipeDTO {
  @Length(3, 40)
  @IsString()
  public readonly title: string;

  @Length(3, 255)
  @IsString()
  public readonly description: string;

  @IsArray()
  @IsString({ each: true })
  @ArrayNotEmpty()
  public readonly ingredients: Array<string>;
}
