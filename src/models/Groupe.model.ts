import { Model, DataTypes, Sequelize } from "sequelize"
import SousGroupeModel from "./SousGroupe.model";

export default (sequelize: Sequelize) =>
{
    class Groupe extends Model { 
        static SousGroupe;
    }

    Groupe.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nom: DataTypes.STRING
    }, { sequelize, freezeTableName: true, timestamps: false, modelName: 'groupe' });

    const SousGroupe = SousGroupeModel(sequelize)
    Groupe.SousGroupe = Groupe.hasMany(SousGroupe, { foreignKey :"groupe_id"})

    return Groupe
}