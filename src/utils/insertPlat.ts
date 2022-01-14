import mysql from 'mysql'
import Plat from '../entity/Plat';

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'agri'
})

con.connect()

export const insertPlats = async (plats: Plat[]) =>
{
    for (let i = 0; i < plats.length; i++)
    {
        const p = plats[i]
        con.query('SELECT id FROM sous_groupe WHERE nom = ?',
            [p.sousGroupe.nom],
            async (error, results, fields) =>
            {
                if (error) throw error;
                const sousGroupeId = results[0].id
                con.query('INSERT INTO plat SET ?',
                    {
                        nom: p.nom,
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
    console.log("End insert plats");
}