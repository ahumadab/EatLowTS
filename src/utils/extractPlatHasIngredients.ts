import Ingredient from '../entity/Ingredient';
import EnergyCost from '../entity/EnergyCost';
import SousGroupe from '../entity/SousGroup';
import Groupe from '../entity/Group';
import Plat from '../entity/Plat';


export const extractPlatsHasIngredients = (data: any[]) =>
{
    const plats: Plat[] = [];
    for (let i = 0; i < data.length; i++)
    {
        const isPlat: boolean = !!data[i].impact_environnemental["Score unique EF"].ingredients
        if (isPlat)
        {
            const platData = data[i]
            const nom: string = platData.nom_francais
            const dqr: number = platData.DQR.overall;
            const energy = platData.impact_environnemental["Score unique EF"].etapes
            const ingredientsData = platData.impact_environnemental["Score unique EF"].ingredients
            const ingredients: Ingredient[] = []
            for (const ing in ingredientsData)
            {
                const energy = ingredientsData[ing]
                const e: EnergyCost = new EnergyCost(energy, 0, 0, 0, 0, 0)
                const ingredient: Ingredient = new Ingredient(ing, null, e, null, null)
                ingredients.push(ingredient);
            }
            const sousGroupe: SousGroupe = new SousGroupe(platData.sous_groupe);
            const groupe: Groupe = new Groupe(platData.groupe, [sousGroupe]);

            const plat: Plat = new Plat(nom, groupe, sousGroupe, ingredients);
            plats.push(plat)
        }
    }
    return plats
}