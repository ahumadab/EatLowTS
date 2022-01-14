import mysql from 'mysql'
import EnergyCost from '../entity/EnergyCost';

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'agri'
})

con.connect()

export const selectEnergyCostById = async (id: number): Promise<EnergyCost> =>
{
    let energyCost: EnergyCost = null;
    con.query('SELECT * FROM coup_energetique WHERE id = ?',
        [id],
        (error, results) =>
        {
            if (error)
                throw error;
            energyCost = new EnergyCost(results[0].agriculture, results[0].transformation, results[0].emballage, results[0].transport, results[0].consommation, results[0].supermarche);
        
        }
    );
}