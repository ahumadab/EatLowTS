import { Model, DataTypes, Sequelize } from "sequelize"
import EnergyCostModel from "./EnergyCost.model";
import GroupeModel from "./Groupe.model";
import SousGroupeModel from "./SousGroupe.model";
import Groupe from '../entity/Group';
import PlatModel from "./Plat.model";


export default (sequelize: Sequelize) =>
{
    class Ingredient extends Model
    {
        static SousGroupe;
        static EnergyCost;
        static Plat;
    }

    Ingredient.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nom: { type: DataTypes.STRING },
        dqr: { type: DataTypes.FLOAT },
    }, { sequelize, freezeTableName: true, timestamps: false,modelName: 'ingredient' });

    const SousGroupe = SousGroupeModel(sequelize)
    const EnergyCost = EnergyCostModel(sequelize)
    const Plat = PlatModel(sequelize)

    Ingredient.SousGroupe = Ingredient.hasOne(SousGroupe, { foreignKey :"sous_groupe_id"})
    Ingredient.EnergyCost = Ingredient.hasOne(EnergyCost, { foreignKey :"coup_energetique_id"})
    Ingredient.Plat = Ingredient.belongsToMany(Plat, { through :"plat_has_ingredient"})

    return Ingredient
}