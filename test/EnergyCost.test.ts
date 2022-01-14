import EnergyCost from '../src/entity/EnergyCost';
describe("EneryCost Tests", () =>
{
    let eneryCost: EnergyCost;
    beforeEach(() =>
    {
        eneryCost = new EnergyCost(0.1, 0.2, 0.3, 0.4, 0.5, 0.6)
    });

    it('Getters fonctionnel', () =>
    {
        expect(eneryCost.agriculture).toBe(0.1);
        expect(eneryCost.transformation).toBe(0.2);
        expect(eneryCost.emballage).toBe(0.3);
        expect(eneryCost.transport).toBe(0.4);
        expect(eneryCost.consommation).toBe(0.5);
        expect(eneryCost.supermarche).toBe(0.6);
    });

    it('Setters fonctionnel', () =>
    {
        eneryCost.agriculture = 1;
        eneryCost.transformation = 2;
        eneryCost.emballage = 3;
        eneryCost.transport = 4;
        eneryCost.consommation = 5;
        eneryCost.supermarche = 6;

        expect(eneryCost.agriculture).toBe(1);
        expect(eneryCost.transformation).toBe(2);
        expect(eneryCost.emballage).toBe(3);
        expect(eneryCost.transport).toBe(4);
        expect(eneryCost.consommation).toBe(5);
        expect(eneryCost.supermarche).toBe(6);
    });

    it('Synthèse fonctionnelle', () =>{
        const total = eneryCost.agriculture +
        eneryCost.transformation +
        eneryCost.emballage +
        eneryCost.transport +
        eneryCost.consommation +
        eneryCost.supermarche;
        expect(eneryCost.synthese).toBe(total);
    })
})