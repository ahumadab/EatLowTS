export default class EnergyCost
{
    private _id: number;
    private _agriculture: number;
    private _transformation: number;
    private _emballage: number;
    private _transport: number;
    private _consommation: number;
    private _supermarche: number;

    /**
     * 
     * @param {number} agriculture Indice agriculture
     * @param {number} transformation Indice transformation
     * @param {number} emballage Indice emballage
     * @param {number} transport Indice transport
     * @param {number} consommation Indice consommation
     * @param {number} supermarche Indice supermarche
     */
    constructor(agriculture: number, transformation: number, emballage: number, transport: number, consommation: number, supermarche: number)
    {
        this._agriculture = agriculture;
        this._consommation = consommation;
        this._emballage = emballage;
        this._supermarche = supermarche;
        this._transformation = transformation;
        this._transport = transport;
    }

    get synthese()
    {
        return this._agriculture +
            this._consommation +
            this._emballage +
            this._supermarche +
            this._transformation +
            this._transport;
    }

    public get id(): number
    {
        return this._id;
    }
    public set id(value: number)
    {
        this._id = value;
    }

    get agriculture()
    {
        return this._agriculture;
    }

    set agriculture(value: number)
    {
        this._agriculture = value;
    }

    get transformation()
    {
        return this._transformation;
    }

    set transformation(value: number)
    {
        this._transformation = value;
    }

    get transport()
    {
        return this._transport;
    }

    set transport(value: number)
    {
        this._transport = value;
    }

    get emballage()
    {
        return this._emballage;
    }

    set emballage(value: number)
    {
        this._emballage = value;
    }

    get supermarche()
    {
        return this._supermarche;
    }

    set supermarche(value: number)
    {
        this._supermarche = value;
    }

    get consommation()
    {
        return this._consommation;
    }

    set consommation(value: number)
    {
        this._consommation = value;
    }
}
