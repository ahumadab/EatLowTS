import { Model, DataTypes, Sequelize } from "sequelize"
import EnergyCostModel from "./EnergyCost.model";
import GroupeModel from "./Groupe.model";
import SousGroupeModel from "./SousGroupe.model";
import Groupe from '../entity/Group';
import IngredientModel from "./Ingredient.model";


export default (sequelize: Sequelize) =>
{
    class Plat extends Model
    {
        static SousGroupe;
        static Ingredient;
    }

    Plat.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nom: { type: DataTypes.STRING }
    }, { sequelize, freezeTableName: true, timestamps: false,modelName: 'ingredient' });

    const SousGroupe = SousGroupeModel(sequelize)
    // const Ingredient = IngredientModel(sequelize)

    Plat.SousGroupe = Plat.hasOne(SousGroupe, { foreignKey :"sous_groupe_id"})
    // Plat.Ingredient = Plat.belongsToMany(Ingredient, { through :"plat_has_ingredient"})

    return Plat
}