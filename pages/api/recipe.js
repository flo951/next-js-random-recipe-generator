import { getRandomRecipe } from '../../util/database';

export default async function recipeHandler(req, res) {
  const recipe = await getRandomRecipe(
    req.body.type,
    req.body.taste,
    req.body.effort,
  );

  res.status(201).json({ recipe: recipe });
  return;
}
