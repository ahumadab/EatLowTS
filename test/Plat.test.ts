import Plat from '../src/entity/Plat';
import Ingredient from '../src/entity/Ingredient';
import EnergyCost from '../src/entity/EnergyCost';
import SousGroupe from '../src/entity/SousGroup';
import Groupe from '../src/entity/Group';

describe("Plat Tests", () =>
{

    let ingredient1: Ingredient;
    let ingredient2: Ingredient;
    let energyCost1: EnergyCost;
    let energyCost2: EnergyCost;
    let sousGroupe1: SousGroupe;
    let sousGroupe2: SousGroupe;
    let groupe1: Groupe;
    let groupe2: Groupe;
    let ingredients: Ingredient[]
    let sousGroupePlat: SousGroupe;
    let groupePlat: Groupe;
    let plat: Plat;

    beforeEach(() =>
    {
        energyCost1 = new EnergyCost(0.1, 0.2, 0.3, 0.4, 0.5, 0.6);
        sousGroupe1 = new SousGroupe("testSousGroupe1");
        groupe1 = new Groupe("testGroupe1", [sousGroupe1]);
        ingredient1 = new Ingredient("testNom1", 0.1, energyCost1, sousGroupe1, groupe1);

        energyCost2 = new EnergyCost(0.9, 0.8, 0.7, 0.6, 0.5, 0.4);
        sousGroupe2 = new SousGroupe("testSousGroupe2");
        groupe2 = new Groupe("testGroupe2", [sousGroupe2]);
        ingredient2 = new Ingredient("testNom2", 0.2, energyCost2, sousGroupe2, groupe2);

        sousGroupePlat = new SousGroupe("sousGroupePlatTest")
        groupePlat = new Groupe("groupePlatTest", [sousGroupePlat]);
        ingredients = [ingredient1, ingredient2];
        plat = new Plat("testPlat", groupePlat, sousGroupePlat, ingredients)
    })
    it("Donne son nom", () =>
    {
        expect(plat.nom).toBe("testPlat");
    })
    it("Donne son groupe", () =>
    {
        expect(plat.groupe).toBe(groupePlat);
    })
    it("Donne son sous groupe", () =>
    {
        expect(plat.sousGroupe).toBe(sousGroupePlat);
    })
    it("Donne ses ingredients", () =>
    {
        expect(plat.ingredients).toBe(ingredients);
        expect(plat.ingredients[0]).toBe(ingredient1);
        expect(plat.ingredients[1]).toBe(ingredient2);
    })
    it("Donne son coup energetique", () =>
    {
        expect(plat.getSynthese()).toBe(0.1 + 0.2 + 0.3 + 0.4 + 0.5 + 0.6 + 0.9 + 0.8 + 0.7 + 0.6 + 0.5 + 0.4);
    })
})