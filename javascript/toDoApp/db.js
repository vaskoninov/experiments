import Sequelize from "sequelize";

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./dev.sqlite3", // Path to your SQLite database file
    logging: false, // Disable SQL logging
});

export default sequelize;
