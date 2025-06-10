//importo los datos de acceso a la BD
import dotenv from "dotenv";
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';
dotenv.config({ path: envFile });
//importo SEQUELIZE
import {Sequelize} from "sequelize";

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT
});

export default sequelize;
// async function testConexionDB() {
//   try {
//     await sequelize.authenticate();
//     console.log("TODO OK!!");

//   } catch (error) {
//     console.error("TODO MAL!!", error);
//   }finally{
//     await sequelize.close();
//     console.log("Conexión cerrada");
//   }
// }

// testConexionDB()