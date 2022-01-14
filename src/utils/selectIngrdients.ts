import mysql from 'mysql'
import Ingredient from '../entity/Ingredient';
import { selectEnergyCostById } from './selectEnergyCostById';

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'agri'
})

con.connect()

export const selectIngerdients = async () =>
{
    con.query('SELECT * FROM ingredient WHERE ID = 1',
        async (error, results, fields) =>
        {
            if (error) throw error;
            const sousGroupeId = results[0].id
            const ing = results[0]
            console.log(ing.coup_energetique_id);
            
            const energyCost = await selectEnergyCostById(ing.coup_energetique_id)
            console.log("after");
            
            const ingrdient = new Ingredient(ing.nom, ing.dqr, energyCost, null, null)
            console.log(ingrdient);
        }
    );
}