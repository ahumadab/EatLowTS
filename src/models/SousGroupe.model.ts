import { Model, DataTypes, Sequelize } from "sequelize"
import GroupeModel from "./Groupe.model";
export default (sequelize: Sequelize) =>
{
    class SousGroupe extends Model
    {
        static Groupe;
    }

    SousGroupe.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nom: { type: DataTypes.STRING },
    }, { sequelize, freezeTableName: true, timestamps: false,modelName: 'sous_groupe' });

    
    return SousGroupe
}