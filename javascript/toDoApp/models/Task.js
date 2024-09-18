import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Task = sequelize.define(
    "Task",
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isCompleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

export default Task;
