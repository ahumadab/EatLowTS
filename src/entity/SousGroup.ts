export default class SousGroupe
{
    private _nom: string;

    constructor(nom: string)
    {
        this._nom = nom;
    }

    get nom()
    {
        return this._nom;
    }
    set nom(value: string)
    {
        this._nom = value;
    }
}