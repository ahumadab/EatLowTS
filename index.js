import { searchRecipes, MarmitonQueryBuilder, RECIPE_PRICE, RECIPE_DIFFICULTY } from 'marmiton-api'

const qb = new MarmitonQueryBuilder();

const query = qb.withTitleContaining('gateau').build()

const recipies = await searchRecipes(query)

console.log(recipies[0]);

