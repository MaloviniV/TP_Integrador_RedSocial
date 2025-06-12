
// Carga las variables de entorno
import dotenv from "dotenv";
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';
dotenv.config({ path: envFile });

// Verifica el valor de JWT_SECRET
console.log("La variable JWT_SECRET es:", process.env.JWT_SECRET);