import mysql from 'mysql'
import Ingredient from '../entity/Ingredient';
import EnergyCost from '../entity/EnergyCost';

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'agri'
})

con.connect()

const insert = async (ingredients: Ingredient[]) =>
{
    for (let i = 0; i < ingredients.length; i++)
    {
        const ingredient: Ingredient = ingredients[i];
        const {
            agriculture,
            transformation,
            emballage,
            transport,
            supermarche,
            consommation
        } = ingredient.eneryCost;
        con.query('INSERT INTO coup_energetique SET ?',
            {
                agriculture: agriculture,
                transformation: transformation,
                emballage: emballage,
                transport: transport,
                supermarche: supermarche,
                consommation: consommation
            },
            async (error, results, fields) =>
            {
                if (error) throw error;
                const energyCostId = results.insertId

                con.query('SELECT id FROM sous_groupe WHERE nom = ?',
                    [ingredient.sousGroupe.nom],
                    async (error, results, fields) =>
                    {
                        if (error) throw error;
                        const sousGroupeId = results[0].id

                        con.query('INSERT INTO ingredient SET ?',
                            {
                                nom: ingredient.nom,
                                dqr: ingredient.dqr,
                                coup_energetique_id: energyCostId,
                                sous_groupe_id: sousGroupeId
                            },
                            async (error, results, fields) =>
                            {
                                if (error) throw error;
                            }
                        );
                    }
                );
            }
        );
    }
    console.log("end insert");
}


export const insertIngredients = insert

export const insertIngredientsDebug = (ingredients: Ingredient[]) =>
{
    for (let i = 0; i < 3; i++)
    {
        const ingredient: Ingredient = ingredients[i];
        con.query('SELECT id FROM sous_groupe WHERE nom = ?',
            [ingredient.sousGroupe.nom],
            async (error, results, fields) =>
            {
                if (error) throw error;
                const sousGroupeId = results.insertId;
                console.log(results[0].id);
            }
        );

    }
}