import { DataSource } from "typeorm"
import path from "path"

// Configuração do SQLite
const AppDataSource = new DataSource({
    type: "sqlite",
    
    //caminho relativo para nosso DB
    database: path.resolve(__dirname, "database.sqlite"),
    
    //caminho relativo para nossas entities
    entities: [
        path.resolve(__dirname, "entities", "*.{js,ts}")
    ],

    //caminho relativo para nossas migrations
    migrations: [
        path.resolve(__dirname, "migrations", "*.{js,ts}")
    ],

    // Apenas para desenvolvimento
    synchronize: false,
    
    // Altere para true para ver as queries
    logging: true 
})

export { AppDataSource }