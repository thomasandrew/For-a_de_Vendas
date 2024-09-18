import { DatabaseConnection } from '../database/DatabaseConnection'

const db = DatabaseConnection.getConnection()

const normalize = (array) => array.map(e => typeof e == 'string' ? `'${e}'` : e).toString()

const DatabaseAccess = {
    Insert(table, columns, values, callback) {
        const query = `INSERT INTO ${table} (${columns.toString}) values (${normalize(values)})`
        db.transaction(tx => {
            tx.executeSql(query, [], (tx, resp) => callback(resp)),
                (sqlError) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        })
    },
    Delete(table, column, param, callback) {
        const query = `DELETE FROM ${table} WHERE ${column} = ${normalize(param)}`
        db.transaction(tx => {
            tx.executeSql(query, [], (tx, resp) => callback(resp)),
                (sqlError) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        })
    },
    Update(table, updates, column, param, callback) {
        let paramQuery = []
        paramQuery = updates.map((item) => [...paramQuery, `${item.column.toString} = ${normalize(item.value)}`])

        const query = `UPDATE ${table} SET ${paramQuery.toString} WHERE ${column} = ${normalize(param)}`
        db.transaction(tx => {
            tx.executeSql(query, [], () => callback()),
                (sqlError) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        })
    },
    FindWithFilters(table, filters, callback) {
        let paramQuery = []
        paramQuery = filters.map((item) => [...paramQuery, `${item.column.toString} = ${normalize(item.value)}`])

        const query = `SELECT * FROM ${table} WHERE ${paramQuery.toString}`
        db.transaction(tx => {
            tx.executeSql(query, [], (tx, resp) => callback(resp)),
                (sqlError) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        })
    },
    FindAll(table, callback) {
        const query = `SELECT * FROM ${table}`
        db.transaction(tx => {
            tx.executeSql(query, [], (tx, resp) => callback(resp)),
                (sqlError) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        })
    }
}

export default DatabaseAccess
