import Ingredient from '../src/entity/Ingredient';
import EnergyCost from '../src/entity/EnergyCost';
import SousGroupe from '../src/entity/SousGroup';
import Groupe from '../src/entity/Group';
describe("Ingredient Tests", () =>
{
    let ingredient: Ingredient;
    let energyCost: EnergyCost;
    let sousGroupe: SousGroupe;
    let groupe: Groupe;
    beforeEach(() =>
    {
        energyCost = new EnergyCost(0.1, 0.2, 0.3, 0.4, 0.5, 0.6);
        sousGroupe = new SousGroupe("testSousGroupe");
        groupe = new Groupe("testGroupe", [sousGroupe]);
        ingredient = new Ingredient("testNom", 0.99, energyCost, sousGroupe, groupe);
    })
    it("Donne le nom correct", () =>
    {
        expect(ingredient.nom).toBe("testNom");
    })
    it("Donne le DQR correct", () =>
    {
        expect(ingredient.dqr).toBe(0.99);
    })
    it("Donne le coup energetique", () =>
    {
        expect(ingredient.eneryCost).toBe(energyCost);
    })
    it("Donne le sous groupe correct", () =>
    {
        expect(ingredient.sousGroupe).toBe(sousGroupe);
    })
    it("Donne le groupe correct", () =>
    {
        expect(ingredient.groupe).toBe(groupe);
    })
    it("Setters fonctionnels", () =>
    {
        ingredient.nom = "testSetNom";
        ingredient.dqr = 0.1;
        const newEnergyCost = new EnergyCost(0.9, 0.8, 0.7, 0.6, 0.5, 0.4);
        ingredient.eneryCost = newEnergyCost;
        const newSousGroupe = new SousGroupe("testNewSousGroupe");
        ingredient.sousGroupe = newSousGroupe;
        const newGroupe = new Groupe("testGroupe", [newSousGroupe]);
        ingredient.groupe = newGroupe;

        expect(ingredient.nom).toBe("testSetNom");
        expect(ingredient.dqr).toBe(0.1);
        expect(ingredient.eneryCost).toBe(newEnergyCost);
        expect(ingredient.sousGroupe).toBe(newSousGroupe);
        expect(ingredient.groupe).toBe(newGroupe);
    })
})