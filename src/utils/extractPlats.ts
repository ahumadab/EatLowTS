import Ingredient from '../entity/Ingredient';
import EnergyCost from '../entity/EnergyCost';
import SousGroupe from '../entity/SousGroup';
import Groupe from '../entity/Group';
import Plat from '../entity/Plat';


export const extractPlats = (data: any[]) =>
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
            const energyCost: EnergyCost = new EnergyCost(
                energy.Agriculture,
                energy.Transformation,
                energy.Emballage,
                energy.Transport,
                energy["Supermarché et distribution"],
                energy.Consommation
            )
            const sousGroupe: SousGroupe = new SousGroupe(platData.sous_groupe);
            const groupe: Groupe = new Groupe(platData.groupe, [sousGroupe]);

            const plat: Plat = new Plat(nom, groupe, sousGroupe, null);
            plats.push(plat)
        }
    }
    return plats
}