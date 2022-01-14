import Groupe from './Group';
import SousGroupe from './SousGroup';
import Ingredients from './Ingredient';
export default class Plat
{
    private _nom: string;
    private _groupe: Groupe;
    private _sousGroupe: SousGroupe;
    private _ingredients: Ingredients[];

    constructor(nom: string, groupe: Groupe, sousGroupe: SousGroupe, ingredients: Ingredients[])
    {
        this._nom = nom;
        this._groupe = groupe;
        this._sousGroupe = sousGroupe;
        this._ingredients = ingredients;
    }

    public getSynthese(): number 
    {
        const synthese: number = this._ingredients
            .map(ingredient => ingredient.eneryCost.synthese)
            .reduce((a, b) => a + b)
        return synthese
    }

    public get ingredients(): Ingredients[]
    {
        return this._ingredients;
    }
    public set ingredients(value: Ingredients[])
    {
        this._ingredients = value;
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
    public get nom(): string
    {
        return this._nom;
    }
    public set nom(value: string)
    {
        this._nom = value;
    }

}