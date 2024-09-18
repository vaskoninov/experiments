import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import sequelize from "./db.js";
import tasks from "./routes/tasks.js";
const PORT = process.env.PORT;

const app = express();
app.use(express.json());

//Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/tasks", tasks);

// Synchronize Sequelize with the database and start the server

app.listen(PORT, async () => {
    try {
        // Sync the database (creates tables if they don't exist)
        await sequelize.sync({ alter: true }); // Force recreates tables; for production, remove this or use `alter: true`
        // in production use sequelize-cli for migrations
        console.log(`Server running on port ${PORT}`);
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
});
