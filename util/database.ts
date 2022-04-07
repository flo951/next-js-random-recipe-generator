import postgres from 'postgres';
import { config } from 'dotenv-safe';
import camelcaseKeys from 'camelcase-keys';

config();

const sql = postgres();

export type Recipe = {
  type: string;
  taste: string;
  effort: string;
  name: string;
  imageurl: string;
};

export async function getRandomRecipe(
  recipeType: string,
  recipeTaste: string,
  recipeEffort: string,
  randomNumber: number,
) {
  const [recipe] = await sql<[Recipe]>`

  SELECT * from recipes WHERE type = ${recipeType} AND taste = ${recipeTaste} AND effort = ${recipeEffort} AND id = ${randomNumber}
  `;

  return camelcaseKeys(recipe);
}
