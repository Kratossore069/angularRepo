import mysql from 'mysql'
import keys from './keys'

const pool = mysql.createPool(keys.database)

pool.getConnection().then(conn => {
    pool.releaseConnection(conn);
    console.log('DB conectada')
})

export default pool;