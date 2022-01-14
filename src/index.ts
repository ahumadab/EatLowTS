import fs from 'fs'
import sortGroups from './utils/sortGroups'
import insertGroup from './utils/insertGroup';
import extractIngredients from './utils/extractIngredients';
import Ingredient from './entity/Ingredient';
import { insertIngredients, insertIngredientsDebug } from './utils/insertIngredients';
import Plat from './entity/Plat';
import { insertPlats } from './utils/insertPlat';
import { extractPlatsHasIngredients } from './utils/extractPlatHasIngredients';
import { insertPlatsHasIngredientsDebug } from './utils/insertPlatHasIngredients';



const test = fs.readFileSync('./Agribalyse.json', 'utf-8')
const data = JSON.parse(test)


const groupes = sortGroups(data)
insertGroup(groupes)

const ingredients: Ingredient[] = extractIngredients(data)
console.log(ingredients);

insertIngredients(ingredients)


const plats: Plat[] = extractPlatsHasIngredients(data)
insertPlats(plats)


insertPlatsHasIngredientsDebug(plats)



