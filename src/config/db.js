//importo los datos de acceso a la BD
import dotenv from "dotenv"
dotenv.config();
//importo SEQUELIZE
import {Sequelize} from "sequelize";

const sequelize = new Sequelize("artesanos_redsocial", 'root', "", {
  host: "localhost",
  dialect: "mysql",
  port: "3306"
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