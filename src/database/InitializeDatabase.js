import { DatabaseConnection } from './DatabaseConnection'

let db = null
export default class InitializeDatabase {

    constructor() {
        db = DatabaseConnection.getConnection()
        db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
            console.log('Foreign keys turned on')

        );

        this.InitDb()
    }

    InitDb() {
        let sql = [
            //CLIENTES
            `CREATE TABLE IF NOT EXISTS CLIENTES ( 
             CNPJ_CPF       VARCHAR (14) NOT NULL,              
             NOMERAZAO      VARCHAR (60) NOT NULL,              
             NOMEFAN        VARCHAR (50) NOT NULL,              
             INSCREST       VARCHAR (18),                       
             EMAIL          VARCHAR (100) NOT NULL,             
             TEL1           VARCHAR (15) NOT NULL,              
             TEL2           VARCHAR (15),                       
             TELFAX         VARCHAR (15),                       
             ENDERECO       VARCHAR (50) NOT NULL,              
             NUMERO         VARCHAR (10) NOT NULL,              
             COMPLEMENT     VARCHAR (15),                       
             BAIRRO         VARCHAR(30),                        
             OBS            TEXT,                               
             CIDADE         VARCHAR(30),                        
             UF             CHAR (2) NOT NULL,                  
             CEP            CHAR (8),                           
             DATAINAUGU     DATETIME,                           
             CODCLIE_INT    INTEGER PRIMARY KEY AUTOINCREMENT,  
             CODCLIE_EXT    INTEGER,                            
             CODVENDEDOR    INTEGER,                            
             TIPOPESSOA     VARCHAR(1),                         
             ATIVO          VARCHAR(1),                         
             FLAGINTEGRADO  VARCHAR(1),                         
             REGIDENT       VARCHAR(18),                        
             LIMITECRED     DOUBLE,                             
             BLOQUEIO       VARCHAR(2),                         
             CODPERFIL      INTEGER,                            
             CHAVE          VARCHAR(100),                       
             TIPOENDERECO   CHAR(1),                            
             CEPENTREGA     VARCHAR(8),                         
             ENDENTREGA     VARCHAR(50),                        
             NUMENTREGA     VARCHAR(10),                        
             COMPENTREGA    VARCHAR(15),                        
             UFENTREGA      CHAR(2),                            
             CIDADEENTREGA  VARCHAR(30),                        
             BAIRROENTREGA  VARCHAR(30),                        
             REFENTREGA     TEXT,                               
             CEPCOBRANCA    VARCHAR(8),                         
             ENDCOBRANCA    VARCHAR(50),                        
             NUMCOBRANCA    VARCHAR(10),                        
             COMPCOBRANCA   VARCHAR(15),                        
             UFCOBRANCA     CHAR(2),                            
             CIDADECOBRANCA VARCHAR(30),                        
             BAIRROCOBRANCA VARCHAR(30),                        
             TEL1COBRANCA   VARCHAR(15),                        
             TEL2COBRANCA   VARCHAR(15)                         
            );`
        ];

        db.transaction(
            tx => {
                for (let i = 0; i < sql.length; i++) {
                    console.log("execute sql : " + sql[i]);
                    tx.executeSql(sql[i]);
                }
            }, (error) => {
                console.log("error call back : " + JSON.stringify(error));
                console.log(error);
            }, () => {
                console.log("transaction complete call back ");
            }
        );
    }

}