import SousGroupe from './SousGroup';

export default class Groupe extends SousGroupe
{
    private _sousGroupes: SousGroupe[];

    constructor(nom: string, sousGroupes: SousGroupe[])
    {
        super(nom);
        this._sousGroupes = sousGroupes;
    }

    public get sousGroupes(): SousGroupe[]
    {
        return this._sousGroupes;
    }
    public set sousGroupes(value: SousGroupe[])
    {
        this._sousGroupes = value;
    }
}