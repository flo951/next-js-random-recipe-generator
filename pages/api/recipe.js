import { getRandomRecipe } from '../../util/database';

export default async function recipeHandler(req, res) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomNumber = getRandomInt(1, 3);

  const recipe = await getRandomRecipe(
    req.body.type,
    req.body.taste,
    req.body.effort,
    randomNumber,
  );
  console.log(recipe);

  res.status(201).json({ recipe: recipe });
  return;
}
