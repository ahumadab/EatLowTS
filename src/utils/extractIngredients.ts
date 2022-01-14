import Ingredient from '../entity/Ingredient';
import EnergyCost from '../entity/EnergyCost';
import SousGroupe from '../entity/SousGroup';
import Groupe from '../entity/Group';


const extractIngredientsFn = (data: any[]) =>
{
    const ingredients: Ingredient[] = [];
    for (let i = 0; i < data.length; i++)
    {
        const isIngredient = !data[i].impact_environnemental["Score unique EF"].ingredients
        if (isIngredient)
        {
            const ingre = data[i]
            const nom: string = ingre.nom_francais
            const dqr: number = ingre.DQR.overall;
            const energy = ingre.impact_environnemental["Score unique EF"].etapes
            const energyCost: EnergyCost = new EnergyCost(
                energy.Agriculture,
                energy.Transformation,
                energy.Emballage,
                energy.Transport,
                energy["Supermarché et distribution"],
                energy.Consommation
            )
            const sousGroupe: SousGroupe = new SousGroupe(ingre.sous_groupe);
            const groupe: Groupe = new Groupe(ingre.groupe, [sousGroupe])
            const ingredient: Ingredient = new Ingredient(nom, dqr, energyCost, sousGroupe, groupe)
            ingredients.push(ingredient)
        }
    }
    return ingredients
}

const extractIngredients = extractIngredientsFn

export default extractIngredients