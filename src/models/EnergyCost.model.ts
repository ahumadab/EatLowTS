import { Model, DataTypes, Sequelize } from "sequelize"

export default (sequelize: Sequelize) =>
{
    class EnergyCost extends Model
    {
        static Ingredient;
    }

    EnergyCost.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        agriculture: { type: DataTypes.FLOAT },
        transformation: { type: DataTypes.FLOAT },
        emballage: { type: DataTypes.FLOAT },
        transport: { type: DataTypes.FLOAT },
        supermarche: { type: DataTypes.FLOAT },
        consommation: { type: DataTypes.FLOAT },
    }, { sequelize, freezeTableName: true, timestamps: false,modelName: 'coup_energetique' });

    // EnergyCost.Ingredient = Groupe.hasMany(SousGroupe, { foreignKey :"groupe_id"})
    return EnergyCost
}