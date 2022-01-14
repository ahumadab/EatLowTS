import mysql from 'mysql'
import Groupe from '../entity/Group';
import SousGroupe from '../entity/SousGroup';

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'agri'
})

con.connect()

const insert = async (groups: Groupe[]) =>
{
    for (let i = 0; i < groups.length; i++)
    {
        const group: Groupe = groups[i]
        let groupId: number;
        await con.query(`INSERT INTO groupe SET ?`, { nom: group.nom }, async (error, results, fields) =>
        {
            if (error) throw error;
            groupId = results.insertId

            for (let j = 0; j < group.sousGroupes.length; j++)
            {
                const sousGroupe: SousGroupe = group.sousGroupes[j]
                await con.query(`INSERT INTO sous_groupe SET ?`, { nom: sousGroupe.nom, groupe_id: groupId }, (error, results, fields) =>
                {
                    if (error) throw error;
                })
            }
        })
    }
    console.log("end insert");
}

const insertGroup = insert

export default insertGroup