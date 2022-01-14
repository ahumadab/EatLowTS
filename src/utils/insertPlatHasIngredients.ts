import mysql from 'mysql'
import Plat from '../entity/Plat';
import Ingredient from '../entity/Ingredient';

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'agri'
})

con.connect()

export const insertPlatsHasIngredientsDebug = async (plats: Plat[]) =>
{
    let itt = 0
    let autre = 0
    let ingredientsNotfound = new Map<string, number>()
    for (let i = 0; i < plats.length; i++)
    {
        const p: Plat = plats[i]
        con.query('SELECT id FROM plat WHERE nom = ?',
            [p.nom],
            async (error, results, fields) =>
            {
                if (error) throw error;
                const platId = results[0].id
                // console.log(p.ingredients.length);
                let autreEtape = null
                for (let k = 0; k < p.ingredients.length; k++)
                {
                    if (p.ingredients[k].nom == "Autres étapes")
                    {
                        autreEtape = p.ingredients[k].eneryCost.agriculture
                    }
                }
                for (let j = 0; j < p.ingredients.length; j++)
                {
                    const ingredient: Ingredient = p.ingredients[j]
                    // console.log(ingredient);

                    con.query('SELECT id FROM ingredient WHERE nom = ? OR nom LIKE ?',
                        [ingredient.nom, `%${ingredient.nom}%`],
                        async (error, results, fields) =>
                        {
                            if (error) throw error;
                            // console.log(results[0]);

                            if (!results[0])
                            {
                                const ingredientInArrayNotFound = ingredientsNotfound.has(ingredient.nom)
                                console.log("ingredients non trouvé en BDD", ++itt);
                                if (!ingredientInArrayNotFound && ingredient.nom != "Autres étapes")
                                {
                                    ingredientsNotfound.set(ingredient.nom, ingredient.eneryCost.agriculture)
                                    con.query('INSERT INTO coup_energetique SET ?',
                                        {
                                            agriculture: ingredient.eneryCost.agriculture / 6,
                                            transformation: ingredient.eneryCost.agriculture / 6,
                                            emballage: ingredient.eneryCost.agriculture / 6,
                                            transport: ingredient.eneryCost.agriculture / 6,
                                            supermarche: ingredient.eneryCost.agriculture / 6,
                                            consommation: ingredient.eneryCost.agriculture / 6
                                        },
                                        async (error, results, fields) =>
                                        {
                                            if (error) throw error;
                                            const energyCostId = results.insertId

                                            con.query('INSERT INTO ingredient SET ?',
                                                {
                                                    nom: ingredient.nom,
                                                    dqr: null,
                                                    coup_energetique_id: energyCostId,
                                                    sous_groupe_id: null
                                                },
                                                async (error, results, fields) =>
                                                {
                                                    if (error) throw error;
                                                    const newIngredientId = results.insertId

                                                    con.query('INSERT INTO plat_has_ingredient SET ?',
                                                        {
                                                            plat_id: platId,
                                                            ingredient_id: newIngredientId,
                                                            autre_etape: autreEtape
                                                        },
                                                        async (error, results, fields) =>
                                                        {
                                                            if (error) throw error;

                                                        }
                                                    )
                                                }
                                            )
                                        }
                                    )
                                }
                            }
                            else
                            {
                                const ingrId = results[0].id

                                con.query('INSERT INTO plat_has_ingredient SET ?',
                                    {
                                        plat_id: platId,
                                        ingredient_id: ingrId,
                                        autre_etape: autreEtape
                                    },
                                    async (error, results, fields) =>
                                    {
                                        if (error) throw error;

                                    }
                                )
                            }
                        }
                    );
                }
            }
        );
    }
    console.log("end Insert plat has ingredients")
}