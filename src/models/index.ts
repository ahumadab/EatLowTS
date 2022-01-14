import { Sequelize, Model, DataTypes } from "sequelize"
import Groupe from "./Groupe.model"
import SousGroupe from "./SousGroupe.model"
import EnergyCost from "./EnergyCost.model"
import Ingredient from "./Ingredient.model"
import Plat from "./Plat.model"

const sequelize = new Sequelize("agri", 'root', '', {
    host: "localhost",
    dialect: "mysql",
    define: {
        underscored: true
    }
});

const db = {
    Sequelize,
    sequelize,
    Groupe: Groupe(sequelize),
    SousGroupe: SousGroupe(sequelize),
    EnergyCost: EnergyCost(sequelize),
    Ingredient: Ingredient(sequelize),
    Plat: Plat(sequelize)
};

export default db