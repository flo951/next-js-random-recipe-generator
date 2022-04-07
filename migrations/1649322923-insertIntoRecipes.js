const omasRecipes = [
  {
    type: 'starter',
    taste: 'salt',
    effort: 'low',
    name: 'Caprese',
    imageurl:
      'https://res.cloudinary.com/deqc9xffd/image/upload/v1649323574/caprese_pvy5fw.jpg',
  },
  {
    type: 'main',
    taste: 'salt',
    effort: 'middle',
    name: 'Pizza Margherita',
    imageurl:
      'https://res.cloudinary.com/deqc9xffd/image/upload/v1648991901/gfu8tt2jdhbzpkoicfjq.jpg',
  },
  {
    type: 'main',
    taste: 'salt',
    effort: 'middle',
    name: 'Pizza normal',
    imageurl:
      'https://res.cloudinary.com/deqc9xffd/image/upload/v1648635619/sl8nqlzza2fkkwxa0ded.webp',
  },
];

exports.up = async (sql) => {
  await sql`
    INSERT INTO recipes ${sql(
      omasRecipes,
      'type',
      'taste',
      'effort',
      'name',
      'imageurl',
    )}
  `;
};

exports.down = async (sql) => {
  for (const recipe of omasRecipes) {
    await sql`
      DELETE FROM
        recipes
      WHERE
        type = ${recipe.type} AND
        taste = ${recipe.taste} AND
        effort = ${recipe.effort} AND
        name = ${recipe.name} AND
        imageurl = ${recipe.imageurl}
    `;
  }
};
