import Groupe from '../src/entity/Group';
import SousGroupe from '../src/entity/SousGroup';

describe("Groupe Tests", () =>
{
    let group: Groupe;
    beforeEach(() =>
    {
        const sousGroupes = [
            new SousGroupe("sousGroup1"),
            new SousGroupe("sousGroup2"),
            new SousGroupe("sousGroup3")
        ];
        group = new Groupe("groupTest", sousGroupes);
    });

    it("A le nom correct", () =>
    {
        expect(group.nom).toBe('groupTest');
    });

    it("A les bons sous groupes", () =>
    {
        expect(group.sousGroupes)
            .toEqual(expect.arrayContaining([expect.any(SousGroupe)]))
    });
})