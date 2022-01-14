import SousGroupe from '../src/entity/SousGroup';

describe("SousGroup Tests", () =>
{
    let sousGroup: SousGroupe;
    beforeEach(() =>
    {
        sousGroup = new SousGroupe("test");
    });

    it('Getters fonctionnel', () =>
    {
        expect(sousGroup.nom).toBe("test");
    });

    it('Setters fonctionnel', () =>
    {
        sousGroup.nom = "testSetter";

        expect(sousGroup.nom).toBe("testSetter");
    });
})