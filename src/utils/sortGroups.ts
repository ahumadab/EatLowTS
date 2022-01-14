import Groupe from '../entity/Group';
import SousGroupe from '../entity/SousGroup';

const sortGroups = (data: any[]) =>
{
    const groups: Groupe[] = [];
    const sousGroups: SousGroupe[] = [];
    for (let i = 0; i < data.length; i++)
    {
        let sousGroup: SousGroupe;
        let group: Groupe;

        const groupIsNotIn: boolean = !groups.some(group => group.nom == data[i].groupe)
        const groupIsInButNotSousGroup: boolean = groups.some(group => group.nom == data[i].groupe)
            && !sousGroups.some(sousGroup => sousGroup.nom == data[i].sous_groupe)

        if (groupIsNotIn)
        {
            sousGroup = new SousGroupe(data[i].sous_groupe);
            sousGroups.push(sousGroup);
            group = new Groupe(data[i].groupe, [sousGroup]);
            groups.push(group)
        }
        else if (groupIsInButNotSousGroup)
        {
            sousGroup = new SousGroupe(data[i].sous_groupe);
            group = groups.find((group) => group.nom == data[i].groupe)
            sousGroups.push(sousGroup);
            group.sousGroupes.push(sousGroup);
        }

    }
    return groups;
}

const sort = sortGroups

export default sort