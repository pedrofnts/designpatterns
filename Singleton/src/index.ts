import { DatabaseSingleton } from "./DatabaseSingleton";

let db: DatabaseSingleton;

db = DatabaseSingleton.getInstance(); // aqui seria o lugar do 'new'
db.executarQuery("SELECT * from tblCliente");

let db2;
db2 = DatabaseSingleton.getInstance();
db.executarQuery("SELECT * from tblProduto");
