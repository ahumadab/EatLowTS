import EnergyCost from './EnergyCost';
import SousGroupe from './SousGroup';
import Groupe from './Group';
export default class Ingredient
{
    private _id: number;
    private _nom: string;
    private _dqr: number;
    private _eneryCost: EnergyCost;
    private _sousGroupe: SousGroupe;
    private _groupe: Groupe;

    constructor(nom: string, dqr: number, energycost: EnergyCost, sousGroupe: SousGroupe, groupe: Groupe)
    {
        this._nom = nom;
        this._dqr = dqr;
        this._eneryCost = energycost;
        this._sousGroupe = sousGroupe;
        this._groupe = groupe;
    }

    public get id(): number
    {
        return this._id;
    }
    public set id(value: number)
    {
        this._id = value;
    }

    public get nom(): string
    {
        return this._nom;
    }
    public set nom(value: string)
    {
        this._nom = value;
    }

    public get dqr(): number
    {
        return this._dqr;
    }
    public set dqr(value: number)
    {
        this._dqr = value;
    }

    public get eneryCost(): EnergyCost
    {
        return this._eneryCost;
    }
    public set eneryCost(value: EnergyCost)
    {
        this._eneryCost = value;
    }

    public get sousGroupe(): SousGroupe
    {
        return this._sousGroupe;
    }
    public set sousGroupe(value: SousGroupe)
    {
        this._sousGroupe = value;
    }

    public get groupe(): Groupe
    {
        return this._groupe;
    }
    public set groupe(value: Groupe)
    {
        this._groupe = value;
    }
}